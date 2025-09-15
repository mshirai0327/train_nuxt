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
    { row: 1, make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { row: 1, make: "Ford", model: "F-Series", price: 33850, electric: false },
    { row: 1, make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ],
  columnDefs: [
    {
      headerName: "Row",
      valueGetter: "node.rowIndex + 1",
      rowDrag: true,
    },
    { field: "make", editable: true, rowDrag: false },
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
