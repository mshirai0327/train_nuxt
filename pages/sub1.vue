<template>
  <h1>Hello AG-Grid</h1>
  <ag-grid-vue
    :rowData="rowData"
    :columnDefs="colDefs"
    :rowDragManaged="true"
    style="height: 500px"
  >
  </ag-grid-vue>
</template>

<script setup>
import {
  AllCommunityModule,
  ModuleRegistry,
  RowDragModule,
} from "ag-grid-community";
import { AgGridVue } from "ag-grid-vue3";

ModuleRegistry.registerModules([AllCommunityModule, RowDragModule]);
// ModuleRegistry.registerModules([
//   TextFilterModule,
//   NumberFilterModule,
//   RowDragModule,
//   ClientSideRowModelModule,
// ]);

const rowData = ref([
  { make: "Tesla", model: "Model Y", price: 64950, electric: true },
  { make: "Ford", model: "F-Series", price: 33850, electric: false },
  { make: "Toyota", model: "Corolla", price: 29600, electric: false },
]);

const colDefs = ref([
  { field: "make", editable: true, rowDrag: true, rowDragManaged: true },
  { field: "model", editable: false },
  { field: "price", editable: false },
  { field: "electric", editable: false },
]);
</script>

<style scoped></style>
