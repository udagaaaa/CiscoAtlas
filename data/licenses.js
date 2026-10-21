// ライセンス体系。ok:true は公式資料で確認済み、false は一般的な情報のみ（要確認）
const CNS_SRC=['Cisco Networking Subscription Data Sheet','https://www.cisco.com/c/en/us/products/collateral/networking/software/networking-subscription-ds.html'];
const LIC_CNS={ok:true,model:'Cisco Networking Subscription（スイッチ・無線）',term:'サブスクリプション。最短36か月',
  tiers:[['Essentials','基本のネットワーク機能と管理'],['Advantage','Essentialsに上位の分析・自動化・セキュリティ機能を加えたもの']],
  points:['同じライセンスで、Merakiダッシュボードのクラウド管理とオンプレ管理（Smart Software Manager）を選べる','24時間のTACサポートとOS更新を含む。ハードウェア交換（RMA）は別契約','期限が切れても機器は動き続けるが、管理基盤・サポート・Cisco Spaces / ISE連携などが使えなくなる','契約途中の上位アップグレードや、更新日をまとめることができる'],
  legacy:'従来の体系：Network Essentials / Advantage（永続）＋ DNA Essentials / Advantage（3・5・7年）',src:[CNS_SRC]};
const LIC_WAN={ok:true,model:'Cisco Networking Subscription（WAN）',term:'サブスクリプション。最短36か月',
  tiers:[['Essentials','SD-WANの基本機能'],['Advantage','Essentialsに上位のSD-WAN・セキュリティ・分析機能を加えたもの']],
  points:['SD-WAN Managerでライセンスを管理する','SD-WANを使わないルーティング単体のライセンスは、このサブスクリプションの対象外','暗号化スループットが250Mbpsを超える構成ではHSECライセンスが必要になる場合がある'],
  legacy:'従来の体系：DNA Essentials / Advantage / Premier（SD-WAN・ルーティング）',src:[CNS_SRC]};
const LIC_MERAKI_MODEL='Merakiのライセンス方式は Co-term（組織内の期限を1つに揃える）、Per-Device（機器ごと）、サブスクリプションの3種類';

const LICENSES={
  'cat9k':LIC_CNS,'smartsw':LIC_CNS,'meraki-ms':LIC_CNS,'cat-wifi7':LIC_CNS,'cat9100':LIC_CNS,'meraki-mr':LIC_CNS,'wlc9800':LIC_CNS,'catcenter':LIC_CNS,
  'sdwan':LIC_WAN,'cat8k':LIC_WAN,'isr1k':LIC_WAN,
  'sfw':{ok:true,model:'機器 ＋ 機能ごとのサブスクリプション（Smart Licensing）',term:'Essentialsは機器に付属（永続）、ほかはサブスクリプション',
    tiers:[['Essentials','アプリ制御・ルーティング・NATなどの基本機能'],['IPS','侵入防御、ファイル制御、セキュリティインテリジェンス。Malware DefenseとURL Filteringの前提'],['Malware Defense','マルウェア対策とSecure Malware Analytics'],['URL Filtering','カテゴリ・評価ベースのURLフィルタ'],['Carrier','GTP / Diameter / SCTPなど通信事業者向けの検査（3100 / 4200 / 仮想版など）']],
    points:['リモートアクセスVPNを使う場合は、別途Secure Clientのライセンスが必要','管理はFirewall Management CenterまたはSecurity Cloud Control'],
    src:[['Secure Firewall Management Center Feature Licenses','https://cisco.com/go/firepower-licensing'],['License Types and Restrictions','https://docs.manage.security.cisco.com/cdfmc/r_smart_license_types_and_restrictions.html']]},
  'meraki-mx':{ok:false,model:'Merakiライセンス（機器ごとに機能レベルと期間を選ぶ）',term:'1・3・5年など',
    tiers:[['Enterprise','ファイアウォール、拠点間VPN（Auto VPN）、SD-WANの基本機能'],['Advanced Security','Enterpriseに加えてIPS、マルウェア対策、コンテンツフィルタ'],['Secure SD-WAN Plus','Advanced Securityに加えて高度なSD-WAN分析・最適化']],
    points:[LIC_MERAKI_MODEL]},
  'meraki-dash':{ok:false,model:'Meraki のライセンス方式',term:'',
    tiers:[['Co-term','組織内の全ライセンスの期限を1つに揃える従来の方式'],['Per-Device','機器ごとにライセンスを割り当て、期限も機器ごと'],['サブスクリプション','機能単位の期間契約。Cisco Networking Subscriptionもこの形']],points:[]},
  'secure-access':{ok:true,model:'サブスクリプション（2階層 × 2用途）',term:'',
    tiers:[['Essentials','ZTNA・VPNaaS、DNS保護、クラウドFW、SWG、CASB（クラウドアプリの把握）'],['Advantage','Essentialsに加えて、マルウェア解析（無制限）とL7のアプリ制御']],
    points:['それぞれ Secure Internet Access（インターネット向け）と Secure Private Access（社内アプリ向け）に分かれ、片方だけでも両方でも買える'],
    src:[['Secure Access Ordering Guide','https://www.cisco.com/c/en/us/products/collateral/security/secure-access/secure-access-sub-og.html']]},
  'duo':{ok:true,model:'ユーザー単位のサブスクリプション',term:'',
    tiers:[['Free','少人数の試用向け'],['Essentials','フィッシング耐性のあるMFA、SSO、Duo Directory、管理端末の確認'],['Advantage','Essentialsに加えて、ID脅威の検知（Cisco Identity Intelligence）、リスクベース認証'],['Premier','Advantageに加えて、VPN不要のアクセス（Duo Network Gateway）と端末信頼性の全機能']],
    points:[],src:[['Duo Editions Datasheet','https://duo.com/assets/pdf/edition-datasheet.pdf']]},
  'ise':{ok:false,model:'機能レベル別のライセンス ＋ 仮想マシン/アプライアンス',term:'サブスクリプション（期間制）',
    tiers:[['Essentials','802.1X・MAB認証、ゲスト接続'],['Advantage','端末のプロファイリング、BYOD、TrustSec、pxGrid連携'],['Premier','端末のポスチャ（状態チェック）、コンプライアンス、脅威連携']],
    points:['機器管理者のログイン制御（TACACS+）にはDevice Adminライセンスが別途必要']},
  'xdr':{ok:false,model:'機能レベル別のサブスクリプション',term:'',
    tiers:[['Essentials','複数製品のアラート相関と調査'],['Advantage','Essentialsに加えて、他社製品との連携範囲が広い'],['Premier','Advantageに加えて、Ciscoの専門家による脅威ハンティング等のサービス']],points:[]},
  'client':{ok:false,model:'ユーザー単位のライセンス',term:'',
    tiers:[['VPN Only','リモートアクセスVPNのみ'],['Advantage','VPNの基本機能（旧AnyConnect Plus）'],['Premier','端末ポスチャ確認などの上位機能（旧AnyConnect Apex）']],points:[]},
  'nexus9k':{ok:false,model:'DCNサブスクリプション（スイッチごと）',term:'3・5年など',
    tiers:[['Essentials','NX-OSの基本機能と基本的な管理'],['Advantage','VXLAN EVPNなどの上位ファブリック機能'],['Premier','Advantageに加えてNexus Dashboardの分析機能']],points:[]},
  'intersight':{ok:false,model:'サーバー単位のサブスクリプション',term:'',
    tiers:[['Essentials','監視、ファームウェア更新、構成管理'],['Advantage','Essentialsに加えてOS導入・オーケストレーションなどの上位機能']],points:[]},
  'splunk':{ok:false,model:'データ取込量（GB/日）ベース または ワークロード（処理リソース）ベース',term:'',tiers:[],points:['ログが多いほど取込量ベースは高くなるため、利用形態でどちらが有利か変わる']},
  'te':{ok:false,model:'テスト量に応じたユニット消費型 ＋ Endpoint Agent単位',term:'',tiers:[],points:['テストの頻度・数・エージェント種別でユニットの消費量が変わる']},
  'webex':{ok:false,model:'Webex Suite（会議と通話のセット）またはFlex Plan',term:'',
    tiers:[['Flex Plan','ユーザー数または全社契約で、会議・通話・メッセージを組み合わせて契約']],points:[]}
};
LICENSES['ndash']=LICENSES['nexus9k'];LICENSES['splunk-es']=LICENSES['splunk'];LICENSES['itsi']=LICENSES['splunk'];LICENSES['calling']=LICENSES['webex'];
