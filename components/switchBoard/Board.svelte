<script>
  import Switch from "./Switch.svelte";
  import ModalCard from "../Modal/ModalCard.svelte";
  import ModalInput from "../Modal/ModalInput.svelte";
  import Selector from "../Modal/Selector.svelte";
  import CustomButton from "./CustomButton.svelte";
  import { onMount } from "svelte";
  import { query, onSnapshot, collection } from "firebase/firestore";
  import {
    db,
    toggleSwitch,
    createSwitchDoc,
    removeSwitch
  } from "../../utils/firebase.js";
  export let title;
  export let board;
  let switches = {};
  let buttonCreatorModal = false;
  const boardQuery = query(collection(db, `boards/${board.id}/switches`));

  // get all the switches from firestore doc
  function loadSwitches(roomId) {
    onSnapshot(boardQuery, function(snapshot) {
      snapshot.docChanges().forEach(function(change) {
        if (change.type === "removed") {
          var id = change.doc.id;
          delete switches[id];
          switches = switches;
        } else {
          var data = change.doc.data();
          var id = change.doc.id;
          switches[id] = data;
        }
      });
    });
  }
  // load all the data from firestore
  onMount(() => loadSwitches(board.id));
  // evoke toggle method of firestore
  function onSwitchToggle(id, data) {
    toggleSwitch(board.id, id, data);
  }

  // create a firestore document, with given data
  let creationLoading = false;
  async function onSwitchCreated() {
    creationLoading = true;
    await createSwitchDoc(board.id, bufferLabel, bufferPinNum);
    buttonCreatorModal = false;
    creationLoading = false;
    bufferLabel = "";
  }

  // stores the  values of availible pins
  // remove pins as they are used up
  let availiblePins = [{ label: 1 }, { label: 2 }, { label: 3 }];

  // variables to store values given by
  // user
  let bufferLabel = "";
  let bufferPinNum = 1;

  function remove(id) {
    removeSwitch(board.id, id);
  }
</script>

<!-- Markup starts here -->
<div class="m-3 flex-auto">
  <!-- Header start -->
  <header> 
    <h3 class="text-gray-600 font-semibold">{title}</h3>
  </header>
  <!-- Header Event -->

  <!-- Main area -->
  <section class="my-2 grid grid-flow-rows grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-4">
    {#each Object.entries(switches) as [id]}
        <Switch label={switches[id].label} state={switches[id].state} on:toggle={() => onSwitchToggle(id, switches[id])} on:remove={() => remove(id)}/>
    {/each}
    <!-- Button to add new switch -->
    <Switch label="+" state={false} on:toggle={_ => buttonCreatorModal = true}/>
  </section>
  <!-- Modal window to add info for creation of button -->
  <ModalCard 
    modalTitle="Add Button" 
    isOpen={buttonCreatorModal} 
    on:close={_ => buttonCreatorModal = false}
  >
    <div slot="content" class="flex flex-col">
      <ModalInput bind:value={bufferLabel}/>
      <Selector options={availiblePins} selectorName="Pin" bind:value={bufferPinNum}/>
    </div>
    <div slot="footer" class="flex justify-end">
      <CustomButton {onSwitchCreated} isLoading={creationLoading} />
    </div>
  </ModalCard>
</div>