<template>
  <div>
    <div class="app-sidebar__overlay" data-toggle="sidebar"></div>
    <aside class="app-sidebar">
      <div class="app-sidebar__user">
        <!--    <img
          class="app-sidebar__user-avatar"
          src=""
          alt="User Image"
        />   -->
        <div>
          <p class="app-sidebar__user-name">ASLAN ENERGY</p>
        </div>
      </div>
      <ul class="app-menu">
        <li class="treeview refresh">
          <router-link class="app-menu__item" to="/" tag="a">
            <i class="app-menu__icon fa fa-tachometer"></i>
            <span class="app-menu__label">Rapor Ekranı</span>
          </router-link>
        </li>
        <li class="treeview refresh">
          <router-link class="app-menu__item" to="/raporlar" tag="a">
            <i class="app-menu__icon fa fa-tachometer"></i>
            <span class="app-menu__label">RAPORLAR</span>
          </router-link>
        </li>
  

       

      </ul>
    </aside>
  </div>
</template>
<script>
export default {};
</script>

<style>
</style>