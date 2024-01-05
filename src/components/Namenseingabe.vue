<template>
<head>
    <meta charset="UTF-8">
    <title>Namenseingabe</title>
</head>

<body>
    <div>
        <h4>Willkommen! Ich bin der Erzähler, der dich durch deine Zielsetzung begleitet</h4>
        <h4>Bevor wir beginnen: Wie soll ich dich ansprechen?</h4>
        <textarea>Wie soll ich dich ansprechen?</textarea> 
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
    </div>
</body>
</template>

<script>
export default {
        name: 'NamensEingabe',
    }
</script>

<style scoped>

.h4{
    color: white;
}

</style>