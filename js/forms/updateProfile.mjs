import { readProfile, updateProfile } from "../api/profiles/index.mjs";

import { loadLocal, saveLocal } from "../storage/index.mjs";

/**
 * Selects current profile throguh local storage, adds current values to the form
 * Puts new values to api through updateProfile() and saves new values to local storage
 */
export async function setUpdateProfileForm() {
  const form = document.querySelector("#editProfile");
  try {
    if (form) {
      const { name, email, avatar } = loadLocal("profile");
      const { age, from, genre } = loadLocal("profileInfo");

      form.name.value = name;
      form.email.value = email;
      form.avatar.value = avatar;
      const profile = await readProfile(name);
      console.log(profile);

      // add values to form
      form.banner.value = profile.banner;
      form.avatar.value = profile.avatar;
      form.age.value = age;
      form.from.value = from;
      form.genre.value = genre;

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const profile = Object.fromEntries(formData.entries());
        console.log(profile);
        profile.name = name;
        profile.email = email;

        // Save additional information from edit form
        const { age, from, genre } = profile;

        const info = {
          age,
          from,
          genre,
        };

        saveLocal("profileInfo", info);

        updateProfile(profile);
        console.log(profile);
        saveLocal("profile", profile);
      });
    }
  } catch (error) {
    console.log(error);
  }
}
