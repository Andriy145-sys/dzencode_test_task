<template>
  <v-navigation-drawer color="rgb(250, 250, 250)">
    <v-row no-gutters justify="center" class="mt-15">
      <div class="avatar">
        <div>
          <v-icon color="silver" class="settingIcon" small>mdi-cog</v-icon>
        </div>
      </div>
    </v-row>
    <v-item-group class="mt-10">
      <v-col style="text-align: center">
        <v-item v-for="item in menuItemList" :key="item.id">
          <p>
            <router-link
              class="menuItem"
              :class="$route.path !== item.path ? '' : 'menuActiveItem'"
              :to="item.path"
              style="text-decoration: none"
            >
              {{ item.title }}
            </router-link>
          </p>
        </v-item>
      </v-col>
    </v-item-group>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    menuItemList: [
      {
        id: 1,
        title: "Прихід",
        path: "/orders",
      },
      {
        id: 2,
        title: "Групи",
        path: "/groups",
      },
      {
        id: 3,
        title: "Продукти",
        path: "/products",
      },
      {
        id: 4,
        title: "Користувачі",
        path: "/users",
      },
      {
        id: 5,
        title: "Налаштування",
        path: "/settings",
      },
    ],
  }),
};
</script>

<style>
.menuItem {
  font-size: 18px;
  color: #000000 !important;
  font-weight: 500;
  cursor: pointer;
}
.menuActiveItem {
  text-align: center;
  border-bottom: 3px solid rgb(6, 191, 0);
  width: min-content;
}
.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  text-align: center;
  background-image: url("../assets/img/avatar.png");
  background-size: cover;
}
.settingIcon {
  background-color: white;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-top: 80px;
  margin-left: 85px;
  box-shadow: 5px 5px 5px silver;
  cursor: pointer;
}
</style>