<script>
  import GiveFeedBack from "$components/custom/GiveFeedBack.svelte";
  import ThanksMessage from "$components/custom/ThanksMessage.svelte";
  import { submited } from "$data/submited.js";
</script>

<main
  class="h-screen w-screen bg-very-dark-blue font-Overpass text-light-grey text-sm grid place-items-center"
>
  <div
    class="md:w-fit md:max-w-[327px] w-10/12 h-fit rounded-2xl bg-gradient-to-b from-dark to-darker p-6 grid grid-cols-1 place-content-between"
  >
    {#if $submited}
      <ThanksMessage />
    {:else}
      <GiveFeedBack />
    {/if}
  </div>
</main>
