# Presentation Toggle

> 建立日期：2026-10-29
> 類型：參考資料
> 適用對象：Glen（本機自用，不上架社群商店）

一顆按鈕切換簡報模式。只做一件事：在 `body` 上開關 `presentation-mode` class，
放大的規則全部寫在 `snippets/presentation-mode.css` 裡。

## 安裝

1. 把整個 `presentation-toggle` 資料夾複製到 `<vault>/.obsidian/plugins/`
2. 設定 → 第三方外掛 → 關掉「限制模式」（Restricted mode）
3. 在已安裝清單裡啟用 Presentation Toggle
4. 把 `presentation-mode.css` 片段裡【全域】那一段註解掉，改由按鈕控制

## 用法

- 左側 ribbon 的簡報圖示：點一下開、再點關
- 命令面板「切換簡報模式」，可以去 設定 → 快速鍵 綁一顆熱鍵
- 狀態會記在 `data.json`，重開 Obsidian 還在

## 移除

停用外掛即可，`onunload` 會把 body 的 class 清掉。
