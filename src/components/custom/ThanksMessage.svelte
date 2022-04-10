<script>
  import Tag from "$components/shared/Tag.svelte";
  import Paragraph from "$components/shared/Paragraph.svelte";
  import { selectedValue } from "$data/selectedValue";
  import { submited } from "$data/submited";

  function handleEdit() {
    submited.update(() => false);
    selectedValue.update(() => 0);
  }
</script>

<div class="flex flex-col items-center gap-6">
  <img class="w-[60%]" src="/illustration-thank-you.svg" alt="thanks" />
  <Tag>You selected {$selectedValue} out of 5</Tag>
  <Paragraph
    center={true}
    title="Thank you!"
    text="We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
  />
  <button class="text-primary font-bold" on:click={handleEdit}>Edit Rating</button>
</div>
