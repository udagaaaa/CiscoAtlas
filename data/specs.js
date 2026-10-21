// 型番ごとのスペック（代表モデルのみ）。数値は各データシートの公表値で、測定条件はデータシートごとに違う
const DS='https://www.cisco.com/c/en/us/products/collateral/';
const SPECS={
  'cat9k':{title:'Catalyst 9300 の代表モデル',cols:['型番','ダウンリンク','PoE','PoE最大電力','アップリンク','スタック'],rows:[
    ['C9300-24P','24 × 1G','PoE+ 30W','720W','モジュール式 10/25/40G','StackWise-480'],
    ['C9300-48P','48 × 1G','PoE+ 30W','1,440W','モジュール式 10/25/40G','StackWise-480'],
    ['C9300-48U','48 × 1G','UPOE 60W','1,800W','モジュール式 10/25/40G','StackWise-480'],
    ['C9300-24UX','24 × mGig（〜10G）','UPOE 60W','1,440W','モジュール式 10/25/40G','StackWise-480'],
    ['C9300-48H','48 × 1G','UPOE+ 90W','2,337W','モジュール式 10/25/40G','StackWise-480'],
    ['C9300X-48HX','48 × mGig（〜10G）','UPOE+ 90W','2,105W','モジュール式 〜100G','StackWise-1T'],
    ['C9300X-24Y','24 × 25G SFP28','—','—','モジュール式 〜100G','StackWise-1T'],
    ['C9300L-24P-4X','24 × 1G','PoE+ 30W','720W','固定 4 × 10G','StackWise-320'],
    ['C9300LM-48UX-4Y','40 × 1G + 8 × 10G','UPOE 60W','1,505W','固定 4 × 25G','StackWise-320']],
    note:'PoE最大電力は電源ユニットを2台積んだ場合の上限。標準構成の電力はこれより小さい。',
    src:[['Catalyst 9300 Series Data Sheet',DS+'switches/catalyst-9300-series-switches/nb-06-cat9300-ser-data-sheet-cte-en.html']]},

  'meraki-ms':{title:'Meraki MS150 の代表モデル',cols:['型番','ダウンリンク','PoE','PoE総電力','アップリンク'],rows:[
    ['MS150-24T-4G','24 × 1G','—','—','4 × 1G SFP'],
    ['MS150-24P-4G','24 × 1G','30W/ポート','370W','4 × 1G SFP'],
    ['MS150-24MP-4X','16 × 1G + 8 × mGig','60W/ポート','370W','4 × 10G SFP+'],
    ['MS150-48FP-4G','48 × 1G','30W/ポート','740W','4 × 1G SFP'],
    ['MS150-48MP-4X','32 × 1G + 16 × mGig','60W/ポート','740W','4 × 10G SFP+']],
    note:'MS150は専用スタックポート2つ（80G）で物理スタック可能。小型のMS130は8〜12ポートの5モデル（PoE総電力120〜240W）。',
    src:[['MS150 Datasheet','https://documentation.meraki.com/Switching/MS_-_Switches/Product_Information/Overviews_and_Datasheets/MS150_Datasheet'],['MS130 Datasheet','https://documentation.meraki.com/MS/MS_Overview_and_Specifications/MS130_Datasheet']]},

  'cat8k':{title:'Catalyst 8000 エッジの代表モデル',cols:['型番','位置づけ','SD-WAN IPsec（1400B）','SD-WAN IPsec（IMIX）'],rows:[
    ['C8200-1N-4T','小規模拠点','1 Gbps','0.9 Gbps'],
    ['C8300-1N1S','中〜大規模拠点（10G WAN）','17 Gbps','6.3 Gbps'],
    ['C8500-12X','WAN集約・本社','68 Gbps','31.9 Gbps'],
    ['C8000V','AWS / Azure / GCP・仮想基盤','割り当てるvCPUで変動','—']],
    note:'暗号化スループットが250Mbpsを超える構成では、HSECライセンスが必要になる場合がある（ライセンスタブ参照）。',
    src:[['Catalyst 8200 Data Sheet',DS+'routers/catalyst-8200-series-edge-platforms/nb-06-cat8200-series-edge-plat-ds-cte-en.html'],['Catalyst 8300 Data Sheet',DS+'routers/catalyst-8300-series-edge-platforms/datasheet-c78-744088.html'],['Catalyst 8500 Data Sheet',DS+'routers/catalyst-8500-series-edge-platforms/datasheet-c78-744089.html']]},

  'cat-wifi7':{title:'Wi-Fi 7 アクセスポイント',cols:['型番','無線構成','アップリンク','給電','特徴'],rows:[
    ['CW9172I','3無線（2.4G 2×2 / 5G 〜4×4 / 6G 2×2）','1 × 2.5G mGig','—（データシート参照）','中密度オフィス向け。2無線モードも可'],
    ['CW9176I / D1','3無線 各4×4（2.4 / 5 / 6GHz）+ スキャン無線 + BLE','1 × 10G mGig','802.3bt でフル機能（PoE+は一部制限）','最大18Gbps。GPS内蔵。D1は指向性アンテナ'],
    ['CW9178I','4無線 各4×4（2.4 / 5 / 5 / 6GHz）','2 × 10G mGig（LACP）','802.3bt（60W）でフル機能','高密度・大規模会場向けの最上位']],
    note:'3モデルともMerakiダッシュボード管理と、Catalyst 9800 / Catalyst Center管理のどちらでも使える。',
    src:[['CW9176I / CW9176D1 Datasheet','https://documentation.meraki.com/MR/MR_Overview_and_Specifications/CW9176I_%2F%2F_CW9176D1_Datasheet'],['CW9178I Deployment Guide','https://www.cisco.com/c/en/us/td/docs/wireless/access_point/technical-reference/cw9178i-dg.html'],['CW9172 Deployment Guide','https://www.cisco.com/c/en/us/td/docs/wireless/access_point/technical-reference/cw9172-dg.html']]},

  'sfw':{title:'Secure Firewall の代表モデル',cols:['型番','形状','FW+AVC+IPS（1024B）','主なポート / 備考'],rows:[
    ['220','デスクトップ（ファンレス）','1.5 Gbps','小規模拠点。SD-WAN機能あり'],
    ['1210CE / 1210CP','デスクトップ','6.0 Gbps','8 × 1G（CPはPoE 4ポート・120W）'],
    ['1220CX','デスクトップ','9.0 Gbps','8 × 1G + 2 × SFP+'],
    ['1250','1RU','18 Gbps','8 × 2.5G + 4 × SFP+'],
    ['3110','1RU','17 Gbps','最大10G'],
    ['3140','1RU','45 Gbps','25G / 40G 対応'],
    ['4215','—','65 Gbps','TLS復号 20 Gbps'],
    ['4245','—','140 Gbps','TLS復号 45 Gbps'],
    ['6160','2RU','550 Gbps','400G（QSFP-DD）'],
    ['6170','2RU','600 Gbps','400G（QSFP-DD）']],
    note:'Threat Defenseソフトウェアでの値。ASAで動かす場合や、TLS復号を有効にした場合は数値が変わる。',
    src:[['200 Series Data Sheet',DS+'security/firewalls/secure-firewall-200-series/secure-firewall-200-ds.html'],['1200 Series Data Sheet',DS+'security/firewalls/secure-firewall-1200-series-ds.html'],['3100 Series Data Sheet',DS+'security/firewalls/secure-firewall-3100-series-ds.html'],['4200 Data Sheet',DS+'security/firewalls/secure-firewall-4200-ds.html'],['6100 Series Data Sheet',DS+'security/firewalls/secure-firewall-6100-series/secure-firewall-6100-series-ds.html']]},

  'meraki-mx':{title:'Meraki MX の代表モデル',cols:['型番','推奨クライアント数','FW（EMIX）','Advanced Security','VPN'],rows:[
    ['MX67 / MX68','50','700 Mbps','300 Mbps','300 Mbps'],
    ['MX75','200','1 Gbps','500 Mbps','1 Gbps'],
    ['MX85','250','1 Gbps','500 Mbps','1 Gbps'],
    ['MX95','500','3 Gbps','1.5 Gbps','2.5 Gbps'],
    ['MX105','750','5 Gbps','2 Gbps','3.5 Gbps'],
    ['MX250','2,000','7 Gbps','2 Gbps','3.5 Gbps'],
    ['MX450','10,000','10 Gbps','5 Gbps','6.5 Gbps']],
    note:'MX 26.1.x 時点の値。Advanced SecurityはIPSを防御モードで動かした場合。',
    src:[['MX Sizing Principles','https://documentation.meraki.com/MX/MX_Sizing_Information/MX_Sizing_Principles']]},

  'nexus9k':{title:'Nexus 9300 の代表モデル',cols:['型番','ポート構成','サイズ','用途'],rows:[
    ['93180YC-FX3','48 × 25G SFP28 + 6 × 100G','1RU','サーバー収容（ToR）'],
    ['93600CD-GX','28 × 100G + 8 × 400G','1RU','リーフ / 小規模スパイン'],
    ['9332D-GX2B','32 × 400G','1RU','スパイン・高速リーフ'],
    ['9364E-SG2','64 × 800G（51.2 Tbps）','2RU','AIクラスタ。Silicon One G200搭載']],
    src:[['Nexus 9364E-SG2 Data Sheet',DS+'switches/nexus-9000-series-switches/nexus-9364e-sg2-switch-ds.html']]}
};
const SPEC_CHECKED='2026年10月';
