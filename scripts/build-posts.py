#!/usr/bin/env python3
"""从 posts.json + Markdown 文件生成 posts/posts-data.js（支持 file:// 直接打开）。"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
POSTS_DIR = ROOT / "posts"
MANIFEST = POSTS_DIR / "posts.json"
OUTPUT = POSTS_DIR / "posts-data.js"


def main():
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    posts = []
    for meta in manifest.get("posts", []):
        md_path = POSTS_DIR / meta["file"]
        if not md_path.exists():
            raise FileNotFoundError(f"找不到文章文件: {md_path}")
        post = {k: v for k, v in meta.items() if k != "file"}
        post["content"] = md_path.read_text(encoding="utf-8")
        posts.append(post)

    js = "// 自动生成，请勿手改。运行: python3 scripts/build-posts.py\n"
    js += "window.BLOG_POSTS = "
    js += json.dumps(posts, ensure_ascii=False, indent=2)
    js += ";\n"
    OUTPUT.write_text(js, encoding="utf-8")
    print(f"已生成 {OUTPUT}（{len(posts)} 篇文章）")


if __name__ == "__main__":
    main()
