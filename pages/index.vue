<template>
  <h1>Hello main AG-Grid</h1>
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

class TextEditorNoCursorSelect {
  init(params) {
    this.eInput = document.createElement("input");
    this.eInput.type = "text";
    this.eInput.value = params.value || "";
    this.eInput.classList.add("ag-cell-edit-input");

    // カーソルを末尾に配置
    setTimeout(() => {
      this.eInput.focus();
      const length = this.eInput.value.length;
      this.eInput.setSelectionRange(length, length);
    }, 0);
  }

  getGui() {
    return this.eInput;
  }

  getValue() {
    return this.eInput.value;
  }

  destroy() {}

  isPopup() {
    return false;
  }
}

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
    {
      field: "make",
      editable: true,
      rowDrag: false,
      cellEditor: TextEditorNoCursorSelect,
    },
    { field: "model" },
    { field: "price" },
    { field: "electric" },
  ],
  defaultColDef: {
    editable: false,
    cellStyle: { whiteSpace: "pre" },
  },
  rowDragManaged: true,
  suppressKeyboardEvent: (params) => {
    const { event, editing } = params;

    // 編集中でない場合は通常処理
    if (!editing) return false;

    const key = event.key;

    // IME変換中のEnterを抑制
    if (key === "Enter" && event.isComposing) {
      return true;
    }

    // keyCode 229 は IME 入力中を示す（古いブラウザ対応）
    if (event.keyCode === 229) {
      return true;
    }

    return false;
  },
});
</script>

<style scoped></style>
