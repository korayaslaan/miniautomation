<template>
  <div>
    <Header />
    <main class="app-content">
      <div class="app-title">
        <div>
          <h1><i class="fa fa-dashboard"></i> Raporlar</h1>
        </div>
        <ul class="app-breadcrumb breadcrumb">
          <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
          <li class="breadcrumb-item"><a href="#">Raporlar</a></li>
        </ul>
      </div>

      <div class="row">
        <div >
          <div class="tile">
            <div class="tile-body">
              <table class="table table-hover table-bordered" id="sampleTable">
                <thead>
                  <tr>
                      <th>Kayıt Tarihi</th>
                    <th>id</th>
                    <th>operator</th>
                    <th>Makina</th>
                    <th>Firma Adı</th>
                    <th>Mesai Başlama Saati</th>
                    <th>Mesai Bitiş Saati</th>
                    <th>Motor Başlama Saati</th>
                    <th>Motor Bitiş Saati</th>
                    <th>Metraj</th>
                    <th>Lokasyon</th>
                    <th>Alınan Yakıt</th>
                    <th>Delinen Delik Sayısı</th>
                    <th>Delik Boyutu</th>
                    <th>ARIZA RAPORU</th>
                  
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Sidebar />
  </div>
</template>
<script>
import Header from "./default/Header";
import Sidebar from "./default/Sidebar";
import Modal from "./default/Modal";
import axios from "axios";
import store from "../store";
import DecoupledDocument from "@ckeditor/ckeditor5-build-decoupled-document";
export default {
  data() {
    return {
      web_url: this.$store.state.web_url,
      editor: DecoupledDocument,
      result: {
        id: "",
        operator: "",
        alinan_yakit: "",
        ariza_raporu: "",
        delik_boyutu: "",
        delik_sayisi: "",
        firma_adi: "",
        lokasyon: "",
        makina: "",
        mesai_baslama: "",
        mesai_bitis: "",
        motor_baslama: "",
        motor_bitis: "",
        toplam_metraj: "",
        regdate: "",
      },
    };
  },
  methods: {
    onReady(editor) {
      // Insert the toolbar before the editable area.
      editor.ui
        .getEditableElement()
        .parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
        );
    },
    sendData: function () {
      var url =
        store.state.base_url + "OurProject/updateOurProject.php?key=123";

      var datas = {
        admin_id: localStorage.getItem("id"),
        admin_token: localStorage.getItem("token"),
        id: this.result.id,
        project_name: this.result.project_name,
        content: this.result.content,
        title: this.result.title,
      };

      axios
        .post(url, JSON.stringify(datas))
        .then((response) => {
          if (response.data.data == true) {
            location.reload();
          }

          ////conso.log(response);
        })
        .catch((error) => {
          //conso.log(error.response);
        });
    },
    deleteData: function () {
      var url =
        store.state.base_url + "OurProject/deleteOurProject.php?key=123";

      var datas = {
        admin_id: localStorage.getItem("id"),
        admin_token: localStorage.getItem("token"),
        id: this.result.id,
      };

      axios
        .post(url, JSON.stringify(datas))
        .then((response) => {
          if (response.data.data == true) {
            //location.reload();
          }
          ////conso.log(response);
        })
        .catch((error) => {
          //conso.log(error.response);
        });
    },
  },

  mounted() {
    var results = this.result;
    let datas = [];
    let dataUrl =
      store.state.base_url + "OurProject/getAllOurProjects.php?key=123";
    return axios
      .get(dataUrl)
      .then((response) => {
        datas = response.data.data;
        console.log(datas);
        var table = $("#sampleTable").DataTable();

        $.each(datas, function (index, value) {
          table.row
            .add([
                    value["regdate"],
              value["id"],
              value["operator"],
              value["makina"],
              value["firma_adi"],
              value["mesai_baslama"],
              value["mesai_bitis"],
              value["motor_baslama"],
              value["motor_bitis"],
              value["toplam_metraj"],
              value["lokasyon"],
              value["alinan_yakit"],
              value["delik_sayisi"],
              value["delik_boyutu"],
              value["ariza_raporu"],
        
            ])
            .draw(false);
        });

        $("#sampleTable tbody").on("click", "tr", function () {
          var data = table.row(this).data();

          results.id = data[0];
          results.operator = data[1];
          results.alinan_yakit = data[10];
          results.ariza_raporu = data[13];
          results.delik_boyutu = data[12];
          results.delik_sayisi = data[11];
          results.firma_adi = data[3];
          results.lokasyon = data[9];
          results.makina = data[2];
          results.mesai_baslama = data[4];
          results.mesai_bitis = data[5];
          results.motor_baslama = data[6];
          results.motor_bitis = data[7];
          results.toplam_metraj = data[8];
          results.regdate = data[14];

    
        });
      })
      .catch((err) => {
        //conso.log(err.response);
      });
  },

  components: {
    Header,
    Sidebar,
    Modal,
  },
};
</script>