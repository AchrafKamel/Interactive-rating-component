<script>
  import Tag from "../UI/Tag.svelte";
  import Paragraph from "../UI/Paragraph.svelte";
  import { selectedValue } from "../../data/selectedValue";
</script>

<div class="flex flex-col items-center gap-6">
  <img class="w-[60%]" src="/illustration-thank-you.svg" alt="thanks" />
  <Tag>You selected {$selectedValue} out of 5</Tag>
  <Paragraph
    center={true}
    title="Thank you!"
    text="We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
  />
</div>
