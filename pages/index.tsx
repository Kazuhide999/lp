import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
    return (
    <div className="body">
        <Head>
            <title>Tairaporomote</title>
        </Head>
        <div>
            <video className='video'src='/test.mp4' autoPlay loop muted playsInline></video>
            <div className="mv_txt">
                <p>
                    学{' '}び{' '}を、
                </p>
                <p>
                    も{' '}っ{' '}と、
                </p>
                <p>
                    新{' '}し{' '}く。
                </p>
            </div>
        </div>
        <div className="containar1">
            <div className="title">
                <p>
                    こんなお悩みありませんか？
                </p>
            </div>
            <div className='containar1_list'>
                <li className='mt-5 flex items-center space-x-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 stroke-orange-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                    グループ内統一のマニュアルがなく、個々の施設毎に異なる手順、クオリティで業務が行われている…。
                </li>
                <li className='mt-5 flex items-center space-x-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 stroke-orange-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                    数年の間、教育資料が変わっておらず、適切な教育がしづらい状態にある…。
                </li>
                <li className='mt-5 flex items-center space-x-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 stroke-orange-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                    マニュアルはあるが、サービス現場で使えるツールが不足している…。
                </li>
                <li className='mt-5 flex items-center space-x-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 stroke-orange-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                    外国人就労者へのノウハウ伝達がうまくいかない…。
                </li>                
            </div>
        </div>
        <div className="cont2_title">
            <p>
                Taira{' '}Promote{' '}なら
            </p>
        </div>
        <div className="containar2-2 py-6">      
            {/*accordion 1*/}
            <div className="accordion">
                <details className="accordion_details">
                    <summary className="accordion_summary">
                        グループ内統一のマニュアルがなく、個々の施設毎に異なる手順、クオリティで業務が行われている…。
                    </summary>
                        {/* flow1 */}
                        <div className="flow_l details-content">
                            <Image src='/step_icon_01.png' alt="problem" width={270} height={270}/>
                            <div className="flow_area pl-2">
                                <div className="bg-gray-100 shadow-lg">
                                    <p className="flow_title">
                                        STEP.1<span className="ml-3">現状把握</span>
                                    </p>
                                    <p>
                                        現状の問題点を把握して、改善すべき課題をお客様に寄り添いながら共に考えます。
                                    </p>
                                </div>
                                <div>
                                    <p className="flow_title">
                                        <span className="text-red-500 p-3">課題</span>
                                    </p>    
                                    <div className="font-medium">
                                        <li>
                                            課題グループ内での作業手順を作成
                                        </li>
                                        <li>
                                            提供するサービスのクオリティの統一と標準化
                                        </li>
                                    </div>
                                </div>                               
                            </div>
                        </div>
                        {/* flow2 */}
                        <div className="flow_r details-content">
                            <div className="flow_area pr-2">
                                <div className="bg-gray-100 shadow-lg">
                                    <p className="flow_title">
                                        STEP.2<span className="ml-3">解決策の企画・提案</span>
                                    </p>
                                    <p>
                                        課題に対し、費用対効果を考慮しながら、最適な解決策を企画・提案いたします。
                                        Taira{' '}promoteは、専門性の高いスタッフが多く在籍しており、最新のデジタル技術を～～～～
                                    </p>
                                </div>
                                <div>
                                    <p className="flow_title">
                                        <span className="text-red-500 p-3">企画・提案</span>
                                    </p>
                                    <div>
                                        <p className="font-medium">
                                            パワーポイントを使った温かみのあるマニュアルの作成。
                                            パワーポイントを使用しているので、納品後でもグループ内で更新が可能。
                                        </p>
                                    </div>
                                </div>    
                            </div>
                            <Image src='/step_icon_02.png' alt="problem" width={270} height={270}/>
                        </div>
                        {/* flow3 */}
                        <div className="flow_l details-content">
                            <Image src='/step_icon_03.png' alt="problem" width={270} height={270}/>
                            <div className="flow_area pl-2">
                                <div className="bg-gray-100 shadow-lg">
                                    <p className="flow_title">
                                        STEP.3<span className="ml-3">運用体制の構築</span>
                                    </p>
                                    <p>
                                        一過性の活動ではなく継続的な変革とするための組織の組成をすることが大切です。
                                        運用体制の構築をサポートいたします。
                                    </p>
                                </div>
                                <div>
                                    <p className="flow_title">
                                        <span className="text-red-500 p-3">サポート</span>
                                    </p>    
                                    <div className="font-medium">
                                        <p>
                                            不明。仮屋さんにインタビューを行う。
                                        </p>
                                    </div>
                                </div>                               
                            </div>
                        </div>
                        {/* flow4 */}
                        <div className='animate-bounce'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto mt-20 stroke-red-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <div className="flow_r details-content mb-10">
                            <div className="flow_area pr-2">
                                <div>
                                    <p className="flow_title">
                                        <span className="text-red-500">効果</span>
                                    </p>
                                    <div className='font-medium text-lg mt-2'>
                                        <p>
                                            全施設共通のサービスを提供が可能になり、
                                        </p>
                                        <p className="text-red-500">
                                            顧客満足度の向上
                                        </p>
                                        <p className="text-red-500">
                                            売上拡大
                                        </p>
                                        <p className="text-red-500">
                                            人材育成コスト削減
                                        </p>                                        
                                    </div>
                                </div>    
                            </div>
                            <Image src='/human_img.png' alt="problem" width={270} height={270}/>
                        </div>  
                </details>
            </div>
            {/*accordion 2*/}
            <div className="accordion">
                <details className="accordion_details">
                    <summary className="accordion_summary">
                        数年の間、教育資料が変わっておらず、適切な教育がしづらい状態にある…。
                    </summary>
                        {/* flow1 */}
                        <div className="flow_l details-content">
                            <Image src='/step_icon_01.png' alt="problem" width={270} height={270}/>
                            <div className="flow_area pl-2">
                                <div className="bg-gray-100 shadow-lg">
                                    <p className="flow_title">
                                        STEP.1<span className="ml-3">現状把握</span>
                                    </p>
                                    <p>
                                        現状の問題点を把握して、改善すべき課題をお客様に寄り添いながら共に考えます。
                                    </p>
                                </div>
                                <div>
                                    <p className="flow_title">
                                        <span className="text-red-500 p-3">課題</span>
                                    </p>    
                                    <div className="font-medium">
                                        <li>
                                            教育資料を最新の製品版へ更新
                                        </li>
                                        <li>
                                            受講者の理解度を向上
                                        </li>
                                        <li>
                                            講師の手間を削減
                                        </li>
                                    </div>
                                </div>                               
                            </div>
                        </div>
                        {/* flow2 */}
                        <div className="flow_r details-content">
                            <div className="flow_area pr-2">
                                <div className="bg-gray-100 shadow-lg">
                                    <p className="flow_title">
                                        STEP.2<span className="ml-3">解決策の企画・提案</span>
                                    </p>
                                    <p>
                                        課題に対し、費用対効果を考慮しながら、最適な解決策を企画・提案いたします。
                                        Taira{' '}promoteは、専門性の高いスタッフが多く在籍しており、最新のデジタル技術を～～～～
                                    </p>
                                </div>
                                <div>
                                    <p className="flow_title">
                                        <span className="text-red-500 p-3">企画・提案</span>
                                    </p>
                                    <div>
                                        <p className="font-medium">
                                            既存資料の残すべき記事、新たに刷新すべき記事を分類し、パワーポイントを使いなるべくコストをかけずに制作。
                                            レイアウトを整え、弊社制作のイラストを活用することで解りやすさを向上。
                                            パワーポイントを使用しているので、納品後でもグループ内で更新が可能。
                                        </p>
                                    </div>
                                </div>    
                            </div>
                            <Image src='/step_icon_02.png' alt="problem" width={270} height={270}/>
                        </div>
                        {/* flow3 */}
                        <div className="flow_l details-content">
                            <Image src='/step_icon_03.png' alt="problem" width={270} height={270}/>
                            <div className="flow_area pl-2">
                                <div className="bg-gray-100 shadow-lg">
                                    <p className="flow_title">
                                        STEP.3<span className="ml-3">運用体制の構築</span>
                                    </p>
                                    <p>
                                        一過性の活動ではなく継続的な変革とするための組織の組成をすることが大切です。
                                        運用体制の構築をサポートいたします。
                                    </p>
                                </div>
                                <div>
                                    <p className="flow_title">
                                        <span className="text-red-500 p-3">サポート</span>
                                    </p>    
                                    <div className="font-medium">
                                        <p>
                                            不明。徳田さんにインタビューを行う。
                                        </p>
                                    </div>
                                </div>                               
                            </div>
                        </div>
                        {/* flow4 */}
                        <div className='animate-bounce'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto mt-20 stroke-red-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <div className="flow_r details-content mb-10">
                            <div className="flow_area pr-2">
                                <div>
                                    <p className="flow_title">
                                        <span className="text-red-500">効果</span>
                                    </p>
                                    <div className='font-medium text-lg mt-2'>
                                        <p>
                                            均質な指導が可能になり、受講者の理解度向上した。
                                        </p>
                                        <p className="text-red-500">
                                            人件費削減
                                        </p>
                                        <p className="text-red-500">
                                            人材育成の効率向上
                                        </p>
                                        <p className="text-red-500">
                                            人材育成体制の確保
                                        </p>                                        
                                    </div>
                                </div>    
                            </div>
                            <Image src='/human_img.png' alt="problem" width={270} height={270}/>
                        </div>    
                </details>
            </div>
            {/*accordion 3*/}
            <div className="accordion">
                <details className="accordion_details">
                    <summary className="accordion_summary">
                        マニュアルはあるが、サービス現場で使えるツールが不足している…。
                    </summary>
                        {/* flow1 */}
                        <div className="flow_l details-content">
                            <Image src='/step_icon_01.png' alt="problem" width={270} height={270}/>
                            <div className="flow_area pl-2">
                                <div className="bg-gray-100 shadow-lg">
                                    <p className="flow_title">
                                        STEP.1<span className="ml-3">現状把握</span>
                                    </p>
                                    <p>
                                        現状の問題点を把握して、改善すべき課題をお客様に寄り添いながら共に考えます。
                                    </p>
                                </div>
                                <div>
                                    <p className="flow_title">
                                        <span className="text-red-500 p-3">課題</span>
                                    </p>    
                                    <div className="font-medium">
                                        <li>
                                            サービス現場での故障診断結果の解析容易化
                                        </li>
                                        <li>
                                            診断時の端子測定箇所を解りやすく確認できるツール
                                        </li>
                                    </div>
                                </div>                               
                            </div>
                        </div>
                        {/* flow2 */}
                        <div className="flow_r details-content">
                            <div className="flow_area pr-2">
                                <div className="bg-gray-100 shadow-lg">
                                    <p className="flow_title">
                                        STEP.2<span className="ml-3">解決策の企画・提案</span>
                                    </p>
                                    <p>
                                        課題に対し、費用対効果を考慮しながら、最適な解決策を企画・提案いたします。
                                        Taira{' '}promoteは、専門性の高いスタッフが多く在籍しており、最新のデジタル技術を～～～～
                                    </p>
                                </div>
                                <div>
                                    <p className="flow_title">
                                        <span className="text-red-500 p-3">企画・提案</span>
                                    </p>
                                    <div>
                                        <p className="font-medium">
                                            サービス現場でも使用できるように、持ち運びに便利なタブレットでの3Dコンテンツを作成。
                                            現地・現物を取材し、サービス現場の意見を取り入れることにより、解りやすさを向上させる。
                                        </p>
                                    </div>
                                </div>    
                            </div>
                            <Image src='/step_icon_02.png' alt="problem" width={270} height={270}/>
                        </div>
                        {/* flow3 */}
                        <div className="flow_l details-content">
                            <Image src='/step_icon_03.png' alt="problem" width={270} height={270}/>
                            <div className="flow_area pl-2">
                                <div className="bg-gray-100 shadow-lg">
                                    <p className="flow_title">
                                        STEP.3<span className="ml-3">運用体制の構築</span>
                                    </p>
                                    <p>
                                        一過性の活動ではなく継続的な変革とするための組織の組成をすることが大切です。
                                        運用体制の構築をサポートいたします。
                                    </p>
                                </div>
                                <div>
                                    <p className="flow_title">
                                        <span className="text-red-500 p-3">サポート</span>
                                    </p>    
                                    <div className="font-medium">
                                        <p>
                                            不明。堤さんにインタビューを行う。
                                        </p>
                                    </div>
                                </div>                               
                            </div>
                        </div>
                        {/* flow4 */}
                        <div className='animate-bounce'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto mt-20 stroke-red-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <div className="flow_r details-content mb-10">
                            <div className="flow_area pr-2">
                                <div>
                                    <p className="flow_title">
                                        <span className="text-red-500">効果</span>
                                    </p>
                                    <div className='font-medium text-lg mt-2'>
                                        <p>
                                            サービス現場での使用が可能になり、さらに最新の3D技術を駆使し解りやすさが向上したことにより、
                                        </p>
                                        <p className="text-red-500">
                                            コスト削減
                                        </p>
                                        <p className="text-red-500">
                                            効率向上
                                        </p>
                                        <p className="text-red-500">
                                            ミス低減
                                        </p>
                                        <p className="text-red-500">
                                            安全性向上
                                        </p>                                               
                                    </div>
                                </div>    
                            </div>
                            <Image src='/human_img.png' alt="problem" width={270} height={270}/>
                        </div> 
                </details>
            </div>
            {/*accordion 4*/}
            <div className="accordion">
                <details className="accordion_details">
                    <summary className="accordion_summary">
                        外国人就労者へのノウハウ伝達がうまくいかない…。
                    </summary>
                        {/* flow1 */}
                        <div className="flow_l details-content">
                            <Image src='/step_icon_01.png' alt="problem" width={270} height={270}/>
                            <div className="flow_area pl-2">
                                <div className="bg-gray-100 shadow-lg">
                                    <p className="flow_title">
                                        STEP.1<span className="ml-3">現状把握</span>
                                    </p>
                                    <p>
                                        現状の問題点を把握して、改善すべき課題をお客様に寄り添いながら共に考えます。
                                    </p>
                                </div>
                                <div>
                                    <p className="flow_title">
                                        <span className="text-red-500 p-3">課題</span>
                                    </p>    
                                    <div className="font-medium">
                                        <li>
                                            手順などを日本語で記述して自動で現地語に変換
                                        </li>
                                        <li>
                                            外国人就労者の理解度を向上する
                                        </li>
                                    </div>
                                </div>                               
                            </div>
                        </div>
                        {/* flow2 */}
                        <div className="flow_r details-content">
                            <div className="flow_area pr-2">
                                <div className="bg-gray-100 shadow-lg">
                                    <p className="flow_title">
                                        STEP.2<span className="ml-3">解決策の企画・提案</span>
                                    </p>
                                    <p>
                                        課題に対し、費用対効果を考慮しながら、最適な解決策を企画・提案いたします。
                                        Taira{' '}promoteは、専門性の高いスタッフが多く在籍しており、最新のデジタル技術を～～～～
                                    </p>
                                </div>
                                <div>
                                    <p className="flow_title">
                                        <span className="text-red-500 p-3">企画・提案</span>
                                    </p>
                                    <div>
                                        <p className="font-medium">
                                            弊社のアプリケーション{' '}<a href='https://www.tairapromote.co.jp/kupu/kupu.html'target="_blank" className='text-blue-700 underline underline-offset-2 mx-2 hover:bg-gray-200 rounded-md'>kupu</a>{' '}をベースに翻訳機能を拡張。
                                            外国人就労者の考え方、感じ方を考慮したマニュアルを作成し解りやすさを向上させる。
                                        </p>
                                    </div>
                                </div>    
                            </div>
                            <Image src='/step_icon_02.png' alt="problem" width={270} height={270}/>
                        </div>
                        {/* flow3 */}
                        <div className="flow_l details-content">
                            <Image src='/step_icon_03.png' alt="problem" width={270} height={270}/>
                            <div className="flow_area pl-2">
                                <div className="bg-gray-100 shadow-lg">
                                    <p className="flow_title">
                                        STEP.3<span className="ml-3">運用体制の構築</span>
                                    </p>
                                    <p>
                                        一過性の活動ではなく継続的な変革とするための組織の組成をすることが大切です。
                                        運用体制の構築をサポートいたします。
                                    </p>
                                </div>
                                <div>
                                    <p className="flow_title">
                                        <span className="text-red-500 p-3">サポート</span>
                                    </p>    
                                    <div className="font-medium">
                                        <p>
                                            不明。堤さんにインタビューを行う。
                                        </p>
                                    </div>
                                </div>                               
                            </div>
                        </div>
                        {/* flow4 */}
                        <div className='animate-bounce'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto mt-20 stroke-red-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                        <div className="flow_r details-content mb-10">
                            <div className="flow_area pr-2">
                                <div>
                                    <p className="flow_title">
                                        <span className="text-red-500">効果</span>
                                    </p>
                                    <div className='font-medium text-lg mt-2'>
                                        <p>
                                            現地語の資料と、外国人就労者の理解度が向上したことにより、
                                        </p>
                                        <p className="text-red-500">
                                            人材育成体制の確保
                                        </p>
                                        <p className="text-red-500">
                                            人材育成コスト削減
                                        </p>
                                        <p className="text-red-500">
                                            品質向上
                                        </p>                                        
                                    </div>
                                </div>    
                            </div>
                            <Image src='/human_img.png' alt="problem" width={270} height={270}/>
                        </div>      
                </details>
            </div>
            <button type="button" className="btn1">
                    <a href="https://www.tairapromote.co.jp/work.html" target="_blank">
                        <p>
                            Taira{' '}promoteの制作事例
                        </p>
                        <p>
                            詳しくはこちら
                        </p>
                    </a>
            </button>            
        </div>
        <div className="containar3">
            <div className='cont3_title'>
                <p>
                    Taira{' '}Promote{' '}を選ぶメリット
                </p>
            </div>
            <div className='flex flex-col justify-center items-center max-lg:w-screen px-3 text-xl font-bold'>
                <div className='text-gray-700 list-disc'>
                    <li className='mt-5 flex items-center space-x-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-10 h-10 mr-3 stroke-red-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                        </svg>
                        弊社では1つの資料制作をベースに、カタログやWeb 媒体への展開につなげるコンテンツのエコフレームワークを推奨しています。
                        そのためトータルでかかる広告販促費や媒体間で発生するコミュニケーションストレスを最小限にすることが可能です。
                    </li>
                    <li className='mt-5 flex items-center space-x-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-10 h-10 mr-3 stroke-red-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                        </svg>
                        現地・現物で丁寧に取材・検討を行い、高品質で使用ユーザー満足度の高い資料を制作できます。
                        ライティングから、イラストや動画、3Dモデルまで、すべて弊社で制作できるため、様々なご要望に柔軟に対応することができます。
                    </li>
                    <li className='mt-5 flex items-center space-x-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-10 h-10 mr-3 stroke-red-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                        </svg>
                        専門性の高いスタッフが多く在籍しているため、CAD図面の正確な読み取りを行えます。
                        そのため、ご担当者様のご説明などのご負担を最小限にできると共に、高品質な資料を制作することができます。
                    </li>
                </div>
                <button type="button" className="btn2">
                        <a href="/">
                            お問い合わせ
                        </a>
                </button>
            </div>
        </div>
        <footer className="footer">
        <a
            className="flex items-center justify-center gap-2"
            href="https://www.tairapromote.co.jp/"
            target="_blank"
        >
            <Image src="/tp_logo.png" alt="tp_logo" width={200} height={100}/>
        </a>
        </footer>
    </div>
    );
}
  
export default Home
