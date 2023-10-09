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
          <v-row no-gutters justify="center">
            <p style="width: max-content; height: 25px">
              <router-link
                class="menuItem"
                :class="
                  $route.path !== item.path
                    ? 'inActiveMenuItem'
                    : 'activeMenuItem'
                "
                :to="item.path"
                style="text-decoration: none"
              >
                {{ item.title }}
              </router-link>
            </p>
          </v-row>
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
  border-bottom: 2px solid transparent;
  display: block;
  content: "";
}
.inActiveMenuItem:after {
  display: block;
  content: "";
  border-bottom: 2px solid #06bf00;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}

.activeMenuItem {
  border-bottom: 2px solid #06bf00;
}
.inActiveMenuItem:hover:after {
  transform: scaleX(1);
  transform-origin: 0% 50%;
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