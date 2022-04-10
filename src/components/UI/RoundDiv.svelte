<script>
  import { selectedValue } from "../../data/selectedValue";
  export let value = 0;
</script>

<div
  on:click={() => selectedValue.update(() => value)}
  class={`rounded-full w-11 h-11 grid place-items-center cursor-pointer bg-dark-blue transition-all duration-300 ${
    $selectedValue === value && "bg-medium-grey text-white"
  } hover:bg-primary hover:text-white`}
>
  {value}
</div>
