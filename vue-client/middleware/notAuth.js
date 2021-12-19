export default ({ store, redirect }) => {
  if (store.getters["user/GET_TOKEN"]) {
    return redirect("/");
  }
};
