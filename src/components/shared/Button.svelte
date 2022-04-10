<script>
  import { submited } from "$data/submited";
  import { selectedValue } from "$data/selectedValue";

  const active = 'bg-primary cursor-pointer transition-all duration-300 hover:bg-white hover:text-primary'
</script>

<button
  on:click={() => $selectedValue && submited.update(() => true)}
  class={`${$selectedValue? active : 'bg-light-grey cursor-default'} self-center w-full p-2.5 rounded-full text-white font-bold text-base tracking-widest`}
  disabled={Boolean(!$selectedValue)}
  >
  SUBMIT
</button>

