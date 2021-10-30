<script>
import SidebarLink from './sidebarlink'
import {toggleSidebar, sidebarWidth } from './state'

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return {toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
    <div> 
      <img alt="Vue logo" src="../../assets/mococo.png" />
    </div>
    <h1>
      <span>
        길드 관리 시스템
      </span>
    </h1>

    <SidebarLink to="/" icon="fas home">Home</SidebarLink>
    <!-- <SidebarLink to="/members" icon="fas fa-columns">Members</SidebarLink> -->
    <!-- <SidebarLink to="/calander" icon="fas fa-chart-bar">Raid Calander</SidebarLink> -->
    <SidebarLink to="/test" icon="fas fa-chart-bar">주간 숙제</SidebarLink>


  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  height: 2.5em;
  font-size: 1.5em;
}


.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>