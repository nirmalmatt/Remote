<script>
  import { signOutUser, auth } from "../utils/firebase.js";
  import SettingsSection from "../components/settings/SettingsSection.svelte";
  import SectionList from "../components/settings/SectionList.svelte";
  import { rooms } from "../utils/firebase.js";

  let settings = [
    {
      label: $auth.currentUser.displayName
    },
    {
      label: $auth.currentUser.email
    }
  ];
  let roomLabel = [];
  for (let room of $rooms) {
    roomLabel = [...roomLabel, { label: room.title }];
  }
</script>
<div class="p-4">
  <SettingsSection sectionHeader="General"></SettingsSection>
  <SettingsSection sectionHeader="Rooms">
    <div slot="main-section">
      <SectionList setting_list={roomLabel} />
    </div>
  </SettingsSection>
  <SettingsSection sectionHeader="Account">
    <div slot="main-section">
      <SectionList setting_list={settings} />
    </div>
    <button 
    slot="additional"
    on:click={signOutUser} 
    class="px-4 py-2 bg-red-500 text-white rounded shadow-md hover:bg-red-600 m-auto"
  >Sign Out</button>
  </SettingsSection>
</div>