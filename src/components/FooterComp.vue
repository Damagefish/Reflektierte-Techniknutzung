<template>
  <div class="footer">
    <div class="footer-section">
      <font-awesome-icon :icon="['fas', 'calendar']" @click="$router.push('/meilensteine-waehlen')"/>
    </div>
    <div class="footer-section">
      <font-awesome-icon :icon="['fas', 'house']" @click="$router.push('/mainscreen')"/>
    </div>
    <div class="footer-section">
      <font-awesome-icon :icon="['fas', 'clock']" @click="$router.push('/checkIn1View')"/>
    </div>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px;
  border: 2px solid #555; 
  border-radius: 8px;
  margin-top: 10px; 
}

.footer-section {
  flex: 1;
  text-align: center;
  padding: 8px; 
  border-right: 1px solid #555; 
}

.footer-section:last-child {
  border-right: none; 
}
</style>