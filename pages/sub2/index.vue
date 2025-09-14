<template>
  <h1>Hello sub2 AG-Grid</h1>
  <ag-grid-vue :gridOptions="gridOptions" style="height: 500px"> </ag-grid-vue>
</template>

<script setup>
import {
  AllCommunityModule,
  ModuleRegistry,
  RowDragModule,
} from "ag-grid-community";
import { AgGridVue } from "ag-grid-vue3";

ModuleRegistry.registerModules([AllCommunityModule, RowDragModule]);

const gridOptions = ref({
  rowData: [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ],
  columnDefs: [
    { field: "make", editable: true, rowDrag: true },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ],
  defaultColDef: {
    editable: false,
    cellStyle: { whiteSpace: "pre" },
  },
  rowDragManaged: true,
});
</script>

<style scoped></style>
