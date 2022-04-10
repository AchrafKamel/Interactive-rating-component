<script>
  import Paragraph from "../UI/Paragraph.svelte";

  import Button from "../UI/Button.svelte";

  import RoundDiv from "../UI/RoundDiv.svelte";
</script>

<div class="rounded-full w-11 h-11 grid place-items-center bg-dark-blue">
  <img src="/icon-star.svg" alt="star icon" />
</div>
<Paragraph
  title="How did we do?"
  text="Please let us know how we did with your support request. All feedback is
appreciated to help us improve our offering!"
/>
<div class="w-full grid grid-cols-5 font-bold place-items-center">
  {#each Array(5) as item, index}
    <RoundDiv value={index + 1} />
  {/each}
</div>
<Button />
