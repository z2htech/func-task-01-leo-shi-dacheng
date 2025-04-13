# TON NFT 项目
这是一个在 TON 区块链上开发的 NFT 项目，实现了基本 NFT 功能和一系列高级功能。项目符合 TEP-62 标准实现。

## 功能特性
### 基础功能
- 管理员生成 NFT：管理员可以调用 mint 函数生成新的 NFT。
- 自定义图片：在生成 NFT 时，管理员可指定图片 URL，存储在元数据中。
### 高级功能
- **升级已发放的 NFT**：管理员可以提升 NFT 的属性（如稀有度）。
- **更新 NFT 信息**：管理员可以修改图片 URL 和其他属性。
- **增加属性**：管理员可以添加新属性（如"力量值"）。
- **销毁 NFT**：管理员可以销毁指定 NFT。
- **置换 NFT**：管理员可以将 NFT 替换为新的 NFT。
### 项目结构
```shell
.
├── contracts/
│   ├── nft-collection.fc  # NFT 集合合约
│   ├── nft-item.fc        # NFT 个体合约
│   ├── op-codes.fc        # 操作码定义
│   └── stdlib.fc          # 标准库函数
├── deploy.js              # 部署脚本
├── .env                   # 环境变量
└── README.md              # 项目说明
```

### 开发环境准备
1. 安装 Node.js 和 npm
2. 安装依赖：
```npm install```
3. 配置 ```.env``` 文件：
- 设置助记词 MNEMONIC（用于测试网部署）
- 设置 TON 测试网 API 密钥 API_KEY
### 部署步骤
1. 确保你的钱包有足够的测试网 TON 代币

    可以从 @testgiver_ton_bot 获取测试代币
2. 部署合约：

###  演示视频

### 部署地址
NFT 集合合约地址（测试网）：[部署后的地址]
