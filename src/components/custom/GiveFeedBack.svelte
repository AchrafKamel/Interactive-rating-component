<script>
  import Paragraph from "$components/shared/Paragraph.svelte";

  import Button from "$components/shared/Button.svelte";

  import RoundDiv from "$components/shared/RoundDiv.svelte";
</script>

<div class="flex flex-col items-start gap-4">
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
</div>
