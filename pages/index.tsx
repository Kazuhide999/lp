import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import React from 'react'
import '@splidejs/splide/css'
import Script from 'next/script';

const Home: NextPage = () => {
    return (
    <div className="body">
        <Script
            type="text/javascript" 
            id="_-s-js-_"
            src="//satori.segs.jp/s.js?c=d924485c"
        />
        <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=UA-52214657-1"
        />
        <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-52214657-1');
                `,
            }}
        />
        <Head>
            <title>車両保守管理 アプリケーション | マニュアル制作と動画制作の平プロモート</title>
            <link rel="shortcut icon" type="image/x-icon" href="/images/favicon.ico"></link>
            <link rel="apple-touch-icon-precomposed" href="/images/57x57.png"></link>
            <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/images/72x72.png"></link>
            <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/images/114x114.png"></link>
            <link rel="apple-touch-icon-precomposed" sizes="144x114" href="/images/144x144.png"></link>
        </Head>
        <div>
            <video className='video'src='Test.mp4' autoPlay loop muted playsInline></video>
            <div className="mv_txt">
                <p className='p-4'>
                    <span className='lg:p-2'>効率的な</span>
                </p>
                <p className='p-4'>
                    <span className='lg:p-2'>車両管理</span>
                </p>
                <p className='p-4'>
                    <span className='lg:p-2'>今すぐに</span>
                </p>
            </div>
            <div className='animate-bounce absolute inset-x-0 bottom-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto mt-20 stroke-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                </svg>
                <p className='text-xl max-lg:text-lg font-bold text-center text-white'>Scroll</p>
            </div>
        </div>
        {/* section_0 */}
        <div className="containar0 flex flex-col">
            <div>
                <p className='text-white text-4xl font-bold mb-5'>
                    <span className="text-blue-200">車両検査にまつわる情報受け渡しの運用手法</span>は万全でしょうか。
                </p>
            </div>
            <div className='text-white text-mb'>
                <p>
                    複数の鉄道運行会社様との接点を持たせていただく中で、共通課題であると捉えたのが車両検査周辺業務の効率化です。
                </p>
                <p>
                    各社様とのヒアリング情報をもとにした現状を解決するアプリケーションをご紹介いたします。
                </p>                
            </div>
        </div>
        {/* section_1 */}
        <div className="containar1 flex flex-col">
            <div className="title">
                <p>
                    車両保守管理 アプリケーション
                </p>
            </div>
            <div>
                <p className="mb-2">
                    <span className="text-xl font-bold border-b">車両検査周辺業務</span>{" "}の{" "} 
                    <span className="text-xl font-bold border-b">生産性</span>{" "}を{" "}  
                    <span className="text-xl font-bold border-b">最大化</span>{" "}することによって、
                </p>
                <p className="mb-2">
                    <span className="text-xl font-bold border-b">コスト削減</span>{" "}や{" "}
                    <span className="text-xl font-bold border-b">より質の高い労働時間</span>{" "}へ充当することができます。
                </p>
            </div>
            <div className='flex items-center max-xl:flex-col mx-auto mt-10 mb-44'>
                <div>
                    <img src="鉄道App.svg"alt="service"width="1200" height="1200"></img>
                </div>
            </div>
        </div>
        {/* section_2 */}
        <div className="containar2">
            <div className="cont2_title">
                <p>
                    車両保守管理{" "}<span className='text-3xl max-lg:text-3xl'>DXによる{" "}</span><span className='text-red-300'>効率化</span>
                </p>
            </div>
            <div className="flex flex-col mx-auto items-center text-center justify-center text-white mt-20">
                <div>
                    <div className='flex p-10 items-center mx-auto'>
                        <div className='flex'>
                            <div>
                                <img src="database.svg"alt="database"width="125" height="125"></img>
                            </div>
                            <div className='flex flex-col w-96 ml-5'>                        
                                <p className='text-2xl font-bold text-blue-200'>
                                    検査記録のペーパーレス化
                                </p>
                                <p className='mt-3 text-center mx-auto'>
                                    ペーパレスによる環境への貢献、紙媒体にまつわるコスト削減はもちろんのこと、データ管理によって検索性の向上が図れ、かつ編成毎の検査実施日の一覧管理も実現します。
                                </p>
                            </div>
                        </div>
                        <div className='flex ml-10'>
                            <div>
                                <img src="schedule.svg"alt="schedule"width="125" height="125"></img>
                            </div>
                            <div className='flex flex-col w-96 ml-5'>
                                <p className='text-2xl font-bold text-blue-200'>
                                    スケジュールと進捗の視える化
                                </p>
                                <p className='mt-3 text-center mx-auto'>
                                    時間を要している検査、時間的な余裕がある期間などをすばやく特定することで効率的な保守管理を実現します。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex p-10 items-center mx-auto'>
                        <div className='flex'>
                            <div>
                                <img src="search.svg"alt="search"width="125" height="125"></img>
                            </div>
                            <div className='flex flex-col w-96 ml-5'>                        
                                <p className='text-2xl font-bold text-blue-200'>
                                    スケジュール管理の簡略化
                                </p>
                                <p className='mt-3 text-center mx-auto'>
                                    検査実施日を基に次回の検査スケジュール案をシステム側より提示します。
                                </p>
                            </div>
                        </div>
                        <div className='flex ml-10'>
                            <div>
                                <img src="check.svg"alt="check"width="125" height="125"></img>
                            </div>
                            <div className='flex flex-col w-96 ml-5'>
                                <p className='text-2xl font-bold text-blue-200'>
                                    電子承認化
                                </p>
                                <p className='mt-3 text-center mx-auto'>
                                    承認申請のための移動、および承認待ち時間を削減します。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>
        </div>
        {/* section_3 */}
        <div className="containar3">
            <div className='cont3_title'>
                <p>
                    Taira{' '}Promote{' '}を選ぶメリット
                </p>
                <p>
                    <span className="text-base max-md:text-sm">～創業以来私たちが取り組んできたのは「伝える」ための仕組みづくりです～</span>
                </p>
            </div>
            <div className='cont3_text'>
                <div className='list-disc pt-5'>
                    <li className='mt-5 flex items-center space-x-3'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-10 h-10 mr-3 stroke-blue-200">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                            </svg>
                        </div>
                        お客様の発展・成果に貢献すべく、企画・提案・制作・運用のサイクルを伴走いたします。
                    </li>
                    <li className='mt-5 flex items-center space-x-3'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-10 h-10 mr-3 stroke-blue-200">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                            </svg>
                        </div>
                        専門的な知識と技術に精通したスタッフが、お客様の課題に寄り添った解決策をご提案します。
                    </li>
                    <li className='mt-5 flex items-center space-x-3'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-10 h-10 mr-3 stroke-blue-200">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                            </svg>
                        </div>
                        実際の作業確認や現物での検討作業を当社スタッフが行うことで、お客様と同じ目線で企画制作にあたります。
                    </li>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center pt-5 max-lg:mb-10">
                <button type="button" className="btn2">
                        <a href="https://www.tairapromote.co.jp/contact.html">
                            お問い合わせ
                        </a>
                </button>
            </div>
        </div>
        <footer className="footer">
        <a
            className="flex items-center justify-center gap-2"
            href="https://www.tairaPromote.co.jp/"
            target="_blank"
        >
            <img src="tp_logo.png"alt="tp_logo" width="200" height="100"></img>
        </a>
        </footer>
    </div>
    );
}
  
export default Home
