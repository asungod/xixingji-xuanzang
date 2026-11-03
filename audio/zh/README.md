# 西行记 · 语音

中文：`audio/zh/01.mp3` … `29.mp3`（云希神经语音，略慢略沉）
英文：`audio/en/01.mp3` … `29.mp3`（Andrew 神经语音）

重新生成：

```powershell
node piying/story_xuanzang/tools/dump_scripts.js
python piying/story_xuanzang/tools/gen_narration_audio.py
```

页面默认「双语」：先中后英。可切「中文」或「EN」。有 mp3 播录音；没有再退回浏览器朗读。
