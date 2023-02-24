import { readProfile, updateProfile } from "../api/profiles/index.mjs";

import { loadLocal } from "../storage/index.mjs";

export async function setUpdateProfileForm() {
  const form = document.querySelector("#editProfile");
  try {
    if (form) {
      const { name, email } = loadLocal("profile");

      form.name.value = name;
      form.email.value = email;
      const profile = await readProfile(name);
      console.log(profile);

      // add values to form
      form.banner.value = profile.banner;
      form.avatar.value = profile.avatar;

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());
        console.log(profile);

        profile.name = name;
        profile.email = email;

        updateProfile(profile);
      });
    }
  } catch (error) {
    console.log(error);
  }
}
