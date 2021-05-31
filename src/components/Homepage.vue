<template>
 <div>
    <Header/>

<main class="app-content">
        <div class="app-title">
            <div>
                <h1><i class="fa fa-dashboard"></i>Yeni Rapor</h1>
            </div>
            <ul class="app-breadcrumb breadcrumb">
                <li class="breadcrumb-item"><i class="fa fa-home fa-lg"></i></li>
                <li class="breadcrumb-item"><a href="#">Yeni Rapor</a></li>
            </ul>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="tile">
                    <h3 class="tile-title">Yeni Rapor</h3>
                    <div class="tile-body">
                        <form>
                   
                            <div class="form-group">
                                <label class="control-label">Operatör Adı:</label>
                                <input v-model="result.operator" class="form-control" type="text" placeholder="Adınızı Giriniz">
                            </div>
                            <div class="form-group">
                                <label class="control-label">Makina Adı:</label>
                                <input v-model="result.makina" class="form-control" type="text" placeholder="Makina Adını Giriniz">
                            </div>
                   
                            <div class="form-group">
                                <label class="control-label">Çalıştığı Firma:</label>
                                <input v-model="result.firma_adi" class="form-control" type="text" placeholder="Çalışılan Firma Adını Giriniz">
                            </div>
                            <div class="form-group">
                                <label class="control-label">Mesai Başlama Saati:</label>
                                <input v-model="result.mesai_baslama" class="form-control" type="text" placeholder="Mesai Başlama Saatini Giriniz">
                            </div>
                            <div class="form-group">
                                <label class="control-label">Mesai Bitiş Saati:</label>
                                <input v-model="result.mesai_bitis" class="form-control" type="text" placeholder="Mesai Bitiş Saatini Giriniz">
                                <p style="color:red;">{{checkEmail}}</p>
                            </div>
                            <div class="form-group">
                                <label class="control-label">Motor Başlama Saati:</label>
                                <input v-model="result.motor_baslama" class="form-control" type="text" placeholder="Motor Başlama Saatini Giriniz">
                            </div>
                            <div class="form-group">
                                <label class="control-label">Motor Bitiş Saati:</label>
                                <input v-model="result.motor_bitis"  class="form-control" type="text" placeholder="Motor Bitiş Saatini Giriniz">
                            </div>
                            <div class="form-group">
                                <label class="control-label">Toplam Metraj:</label>
                                <input v-model="result.toplam_metraj" class="form-control" type="text" placeholder="Toplam Metrajı Giriniz">
                                <p style="color:red;">{{checkEmail}}</p>
                            </div>
                            <div class="form-group">
                                <label class="control-label">Çalıştığı Lokasyon:</label>
                                <input v-model="result.lokasyon" class="form-control" type="text" placeholder="Lokasyon Bilgilerini Giriniz">
                            </div>
                            <div class="form-group">
                                <label class="control-label">Alınan Yakıt:</label>
                                <input v-model="result.alinan_yakit" class="form-control" type="text" placeholder="Alınan Yakıtı Giriniz">
                            </div>
                            <div class="form-group">
                                <label class="control-label">Delinen Delik Sayısı:</label>
                                <input v-model="result.delik_sayisi" class="form-control" type="text" placeholder="Delik Sayısını Giriniz">
                                <p style="color:red;">{{checkEmail}}</p>
                            </div>
                            <div class="form-group">
                                <label class="control-label">Delik Boyutu:</label>
                                <input v-model="result.delik_boyutu" class="form-control" type="text" placeholder="Delik Boyutunu Giriniz">
                            </div>
                            <div class="form-group">
                                <label class="control-label">ARIZA RAPORU:</label>
                                <input v-model="result.ariza_raporu"  class="form-control" type="text" placeholder="Arıza Raporunu Giriniz">
                                <p style="color:red;">{{checkEmail}}</p>
                            </div>
                       

                        </form>
                    </div>

                    <div class="tile-footer">
                    <button
                    @click="sendData()"
                    class="btn btn-primary"
                    type="button"
                  >
                    <i class="fa fa-fw fa-lg fa-check-circle"></i>Kaydet</button
                  >
                    <button @click="reload()" class="btn btn-secondary"
                    ><i class="fa fa-fw fa-lg fa-times-circle"></i>İptal</button
                  >                   
                  </div>


                </div>
            </div>
        </div>
    </main>

        <Sidebar/>
    </div>
</template>

<script>
import Header from "./default/Header";
import Sidebar from "./default/Sidebar";
import axios from "axios";
import store from '../store';

export default {
  data() {
    return {
      result: {
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
        toplam_metraj: ""
      },
      checkEmail:""
    };
  },

  created() {
  },

  methods: {
    reload: function() {
      location.reload();
    },

    sendData: function () {
      var url = store.state.base_url+"OurProject/createOurProject.php";

          var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

 
      var datas = {
        admin_id: localStorage.getItem("id"),
        admin_token: localStorage.getItem("token"),
        operator: this.result.operator,
        alinan_yakit: this.result.alinan_yakit,
        firma_adi: this.result.firma_adi,
        ariza_raporu: this.result.ariza_raporu,
        delik_boyutu: this.result.delik_boyutu,
        delik_sayisi: this.result.delik_sayisi,
        lokasyon: this.result.lokasyon,
        makina: this.result.makina,
        mesai_baslama: this.result.mesai_baslama,
        mesai_bitis: this.result.mesai_bitis,
        motor_baslama: this.result.motor_baslama,
        motor_bitis: this.result.motor_bitis,
        toplam_metraj: this.result.toplam_metraj
      };

      axios
        .post(url, JSON.stringify(datas))
        .then((response) => {
            location.reload();
          if(response.data.result==true)
          {
         location.reload();
          }
          //conso.log(response);
        })
        .catch((error) => {
          //conso.log(error.response);
        });
    },
  },

  components: {
    Header,
    Sidebar,
  },
};
</script>