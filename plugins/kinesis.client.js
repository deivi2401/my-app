
export default defineNuxtPlugin(async () => {
  if (process.client) {
    const { default: Kinesis } = await import("@amineyarman/kinesis");
    const app = useNuxtApp().vueApp;
    app.use(Kinesis);
  }
});

