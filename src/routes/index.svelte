<script>
  import GiveFeedBack from "../components/views/GiveFeedBack.svelte";
  import ThanksMessage from "../components/views/ThanksMessage.svelte";
  import { submited } from "../data/submited";
</script>

<main
  class="h-screen w-screen bg-very-dark-blue font-Overpass text-light-grey text-[14px] grid place-items-center"
>
  <div
    class="w-[327px] h-[360px] rounded-2xl bg-gradient-to-b from-dark to-darker p-6 grid grid-cols-1 place-content-between"
  >
    {#if $submited}
      <ThanksMessage />
    {:else}
      <GiveFeedBack />
    {/if}
  </div>
</main>
