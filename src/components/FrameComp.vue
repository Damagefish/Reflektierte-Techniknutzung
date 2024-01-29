<template>
    <div class="neumorphic-outer">
      <div class="neumorphic-inner">
        <!-- Hier kannst du den Inhalt des inneren Rahmens platzieren -->
        <slot></slot>
      </div>
    </div>
  </template>
  
  <style>
  .neumorphic-outer {
    background-color: #e0e0e0;
    border-radius: 20px;
    padding: 40px; /* Höhere padding für den äußeren Rahmen */
    box-shadow: 8px 8px 16px #bebebe, -8px -8px 16px #ffffff;
    height: 200px;
  }
  
  .neumorphic-inner {
    background-color: #e0e0e0;
    border-radius: 16px;
    padding: 16px;
    margin: -20px 10px 10px; /* Negative Margin-Top für das innere Frame */
    box-shadow: inset 8px 8px 16px #bebebe, inset -8px -8px 16px #ffffff;
    height: 50%;
    padding-bottom: 30px;
  }
  </style>