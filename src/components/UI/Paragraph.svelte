<script>
  export let title;
  export let text;
  export let center = false;
</script>

<div>
  <h1 class={`text-white font-bold text-2xl ${center && "text-center"}`}>
    {title}
  </h1>
  <p class={`leading-6 ${center && "text-center"}`}>
    {text}
  </p>
</div>
