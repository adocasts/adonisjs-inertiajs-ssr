<template>
  <div>
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>

    <main>
      <slot />
    </main>
  </div>
</template>

<script setup>
  import { Link } from '@inertiajs/vue3'
</script>