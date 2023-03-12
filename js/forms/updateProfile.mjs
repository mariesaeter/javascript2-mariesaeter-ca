import { readProfile, updateProfile } from "../api/profiles/index.mjs";

import { loadLocal, saveLocal } from "../storage/index.mjs";
import { redirect } from "../tools/location/reload.mjs";

/**
 * Selects current profile throguh local storage, adds current values to the form
 * Puts new values to api through updateProfile() and saves new values to local storage
 */
export async function setUpdateProfileForm() {
  const form = document.querySelector("#editProfile");
  const url = new URL(location.href);

  try {
    if (form) {
      const name = url.searchParams.get("name");
      // const user = readProfile(name);
      const { email, avatar } = loadLocal("profile");
      if (loadLocal("profileInfo")) {
        const { age, from, genre } = loadLocal("profileInfo");

        form.age.value = age;
        form.from.value = from;
        form.genre.value = genre;
      }

      form.name.value = name;
      form.email.value = email;
      form.avatar.value = avatar;
      const profile = await readProfile(name);

      // add values to form
      form.banner.value = profile.banner;
      form.avatar.value = profile.avatar;

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());
        profile.name = name;
        profile.email = email;

        // Save additional information from edit form
        const { age, from, genre, ...user } = profile;

        const info = {
          age,
          from,
          genre,
        };

        saveLocal("profileInfo", info);

        updateProfile(user);
        saveLocal("profile", user);
        redirect(`/profile/?name=${name}`);
      });
    }
  } catch (error) {
    console.log(error);
  }
}
