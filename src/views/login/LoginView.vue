<template>
  <div>{{test()}}</div>
  <button @click="doubleHandle">double</button>
  <SafetyOutlined style="color: rgba(0, 0, 0, 0.25)" />
  <button @click="loginHandle">login</button>
  <button @click="removeHandle">remove</button>
  <button @click="getInfoHandle">getInfo</button>
  <button @click="sessionTestHandle">sessionTestHandle</button>
</template>

<script>
import {
  SafetyOutlined,
} from '@ant-design/icons-vue'
import { defineComponent, onMounted } from 'vue';
import { UserStore } from "../../stores/user";
import { useUserStore } from '../../stores/modules/user';
import { sessionTest } from '../../api/test'


export default defineComponent({
  components: {
    SafetyOutlined,
  },
  setup() {
    const store = UserStore();
    const userStore = useUserStore();



    const test = () => {
      return store.count;
    }
    console.log('=store', store.count);
    // const doubleHandle = () => {
    //   const res = store.doubleCount;
    //   console.log("res", res);
    // };

    const loginHandle = async () => {
      const res = await userStore.Login({ userName: 'zs', password: 'zs123.' }, true);
      console.log("res", res);
    }

    const removeHandle = async () => {
      const res = await userStore.Logout();
      console.log("res", res);
    }

    const getInfoHandle = async () => {
      const res = await userStore.GetInfo();
      console.log("res", res);
    }

    const sessionTestHandle = async()=>{
      const res =await sessionTest();
      console.log("res", res);
    }

    onMounted(async () => {

    })

    return {
      store,
      test,
      loginHandle,
      removeHandle,
      getInfoHandle,
      sessionTestHandle,
    }
  }
})
</script>

<style scoped>

</style>
