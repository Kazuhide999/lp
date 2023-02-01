import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/css'


const Home: NextPage = () => {
    const [showModal_1, setShowModal_1] = React.useState(false); 
    const [showModal_2, setShowModal_2] = React.useState(false); 
    const [showModal_3, setShowModal_3] = React.useState(false); 
    const [showModal_4, setShowModal_4] = React.useState(false); 
    return (
    <div className="body">
        <Head>
            <title>Taira Promote</title>
        </Head>
        <div>
            <video className='video'src='/lp_title_bg.mp4' autoPlay loop muted playsInline></video>
            <div className="mv_txt">
                <p className='p-4'>
                    <span className='p-2'>悩</span>{' '}<span className='p-2'>み</span>{' '}<span className='p-2'>を</span>{' '}<span className='p-2'>、</span>
                </p>
                <p className='p-4'>
                    <span className='p-2'>課</span>{' '}<span className='p-2'>題</span>{' '}<span className='p-2'>に</span>{' '}<span className='p-2'>、</span>
                </p>
                <p className='p-4'>
                    <span className='p-2'>解</span>{' '}<span className='p-2'>決</span>{' '}<span className='p-2'>へ</span>{' '}<span className='p-2'>。</span>
                </p>
            </div>
            <div className='animate-bounce absolute left-1/2 bottom-5'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 mx-auto mt-20 stroke-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                </svg>
                <p className='text-xl font-bold text-white'>Scroll</p>
            </div>
        </div>
        {/* section_1 */}
        <div className="containar1 flex flex-col">
            <div className="title bg-white bg-opacity-60 rounded-lg">
                <p>
                    <span className='text-blue-800'>「伴走型」</span>課題解決サービス
                </p>
                <div className="font-semibold mt-5 text-lg">
                    <p>
                        「企業課題」を、現状把握・課題形成から解決策・運用方法・定着化まで
                    </p>
                    <p>
                        お客様に寄り添いながら共に考え、「解決」へと導きます。
                    </p>
                </div>
            </div>
            <div className='flex items-center max-xl:flex-col mx-auto mt-10 mb-44'>
                <div>
                    <Image  className="" src='/課題_2.svg' alt="Task"  width={400} height={400}/>
                </div>
                <div className='p-10'>
                    <Image src='/x.svg' alt="Task" width={50} height={50}/>
                </div>
                <div>
                    <Image src='/伴走型-課題解決_SERVICE.svg' alt="service" width={800} height={500}/>
                </div>
            </div>
        </div>
        {/* section_2 */}
        <div className="containar2-2 py-6">
            <div className="cont2_title">
                <p>
                    Taira{' '}Promote{' '}<span className='text-4xl'>が</span>{" "}解決<span className='text-4xl'>してきた{" "}</span><span className='text-blue-600'>「事例」</span>
                </p>
            </div>
            <div className="card_area">
                {/* card_1 */}
                <div className="card_detail">
                <Image className='w-full rounded-t-lg' src='/section1.jpg' alt="test_image" width={200} height={200}/>
                    <div className="px-6 py-3">
                        <div className="card_text">
                            <p>
                                製造現場の帳票類が紙なので
                            </p>
                            <p>
                                運用が大変。情報共有ももっと便利にしたい…。
                            </p>
                        </div>
                        {/*modal 1*/}
                        <div className='flex'>
                            <button className="btn3 flex mt-5" type="button" onClick={() => setShowModal_1(true)}>
                                <Image className='animate-heartbeat mr-2' src='/タッチアイコン.svg' alt="click" width={30} height={30}/>
                                    詳しくはこちら
                            </button>
                        </div>
                        {showModal_1 ? (
                        <>
                        <div className="showModal">
                            <div className="showModal_content">
                                {/*content*/}
                                <div className="showModal_detail">
                                    {/*header*/}
                                    <div className="showModal_header">
                                        <h3 className="text-xl font-semibold text-white">
                                            製造現場の帳票類が紙なので運用が大変。情報共有ももっと便利にしたい…。
                                        </h3>
                                    </div>
                                    {/*body*/}
                                    <Splide
                                        aria-label="flow"
                                        options={{
                                        autoplay: 'pause', // 自動再生を有効
                                        interval: 3000, // 自動再生の間隔を3秒に設定
                                        }}
                                    >
                                        {/* flow1 */}                                
                                        <SplideSlide>
                                        <div className="flow">
                                            <Image src='/step_icon_01.png' alt="problem" width={270} height={270}/>
                                            <div className="flow_area">
                                                <div className="flow_step">
                                                    <p className="flow_title">
                                                        STEP.1<span className="ml-3">現状把握</span>
                                                    </p>
                                                    <p>
                                                        現状の問題点を把握して、改善すべき課題をお客様に寄り添いながら共に考えます。
                                                    </p>
                                                </div>
                                                <div className='mx-10'>
                                                    <p className="flow_title mt-3">
                                                        <span className="flow_sub_title_color">課題</span>
                                                    </p>    
                                                    <div className="mt-2">
                                                        <div className='flow_sub_title'>
                                                            <p>
                                                                工場の製造にかかわる手順書、帳票が多すぎて煩雑
                                                            </p>
                                                        </div>
                                                        <div className='flow_sub_text'>
                                                            <p>
                                                                フォーマットがバラバラで管理者もマチマチ。
                                                            </p>
                                                            <p>
                                                                誰に聞けばいいのかもわからない。
                                                            </p>
                                                        </div>
                                                        <div className='flow_sub_title mt-2'>
                                                            <p>
                                                                製造にかかわる情報の一元化
                                                            </p>
                                                        </div>
                                                        <div className='flow_sub_text'>
                                                            <p>
                                                                製造現場から報告書のある場所に行って手書き、またそれを作業後、持ち帰り上司に報告と、時間のロスも大きく非効率である。
                                                            </p>
                                                        </div>
                                                        <div className='flow_sub_title mt-2'>        
                                                            <p>
                                                                情報共有と効率化 
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>                               
                                            </div>
                                        </div>
                                        </SplideSlide>
                                        {/* flow2 */}
                                        <SplideSlide>
                                        <div className="flow">    
                                        <Image src='/step_icon_02.png' alt="problem" width={270} height={270}/>
                                        <div className="flow_area">
                                                <div className="flow_step">
                                                    <p className="flow_title">
                                                        STEP.2<span className="ml-3">解決策の企画・提案</span>
                                                    </p>
                                                    <p>
                                                        課題に対し、費用対効果を考慮しながら、最適な解決策を企画・提案いたします。
                                                    </p>
                                                    <p>    
                                                        Taira{' '}Promoteは、専門性の高いスタッフが多く在籍しています。
                                                    </p>
                                                    <p>    
                                                        最新のデジタル技術を活用し課題を解決いたします。
                                                    </p>
                                                </div>
                                                <div className='mx-10'>
                                                    <p className="flow_title mt-3">
                                                        <span className="flow_sub_title_color">企画・提案</span>
                                                    </p>
                                                    <div>
                                                        <p className="flow_sub_title mt-2">
                                                            お客様の製造現場の声を我々が聞きあげた結果、作業マニュアルに、
                                                        </p>
                                                        <p className="flow_sub_title">
                                                            そのまま作業結果や不具合情報を記入して報告できれば、
                                                        </p>
                                                        <p className="flow_sub_title">
                                                            非常に効率がいいということを掌握。それらの課題すべてを盛り込んだ、
                                                        </p>
                                                        <p className="flow_sub_title">
                                                            マニュアルアプリをご提案。
                                                        </p>
                                                    </div>
                                                </div>    
                                            </div>
                                        </div>
                                        </SplideSlide>
                                        {/* flow3 */}
                                        <SplideSlide>
                                        <div className="flow">
                                            <Image src='/step_icon_03.png' alt="problem" width={270} height={270}/>
                                            <div className="flow_area">
                                                <div className="flow_step">
                                                    <p className="flow_title">
                                                        STEP.3<span className="ml-3">運用体制の構築</span>
                                                    </p>
                                                    <p>
                                                        一過性の活動ではなく継続的な変革にすることが重要です。
                                                        運用～定着化、成果に応じたブラッシュアップをサポートいたします。
                                                    </p>
                                                </div>
                                                <div className='mx-10'>
                                                    <p className="flow_title mt-3">
                                                        <span className="flow_sub_title_color">サポート</span>
                                                    </p>    
                                                    <div className="flow_sub_title">
                                                        <p>
                                                            お客様がを運用するスタイルを、お客様の状況に応じて提案することができます。
                                                            例えば、当社はプラットフォームだけ提供し、お客様が内容を入力して運用するケースから、
                                                            当社が内容の入力も行い、運用のレクチャーまで行うなど自在に対応できます。
                                                        </p>
                                                    </div>
                                                </div>                               
                                            </div>
                                        </div>
                                        </SplideSlide>
                                        {/* flow4 */}
                                        <SplideSlide>
                                        <div className="flow">
                                            <Image className='mt-16' src='/step_icon_04.png' alt="problem" width={150} height={150}/>
                                            <div className="flow_area">
                                                <div className='mx-10'>
                                                    <p className="flow_title mt-5">
                                                        <span className="flow_sub_title_color">効果</span>
                                                    </p>
                                                    <div className='flow_4_text'>
                                                        <p>
                                                            帳票を物理的に回覧する必要がなくなり、上長チェックなども
                                                        </p>
                                                        <p>
                                                            オンライン化したことにより、作業効率が向上しました。
                                                        </p>
                                                    </div>
                                                    <div className='flow_4_text'>
                                                        <p>
                                                            報告書のデータベース化により、自動作成が可能になりました。
                                                        </p>
                                                        <p>
                                                            また、検索性も向上しました。
                                                        </p>
                                                    </div>
                                                    <div className='flow_4_text'>
                                                        <p>
                                                            作業時間等のログも管理できるようになり、新人教育にも
                                                        </p>
                                                        <p>
                                                            活用することができました。
                                                        </p>
                                                    </div>                                                    
                                                </div>    
                                            </div>
                                        </div>  
                                        </SplideSlide>
                                    </Splide>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button className="btn4" type="button" onClick={() => setShowModal_1(false)}>
                                            閉じる
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                        </>
                        ) : null}
                    </div>
                </div>
                {/* card_2 */}
                <div className="card_detail">
                <Image className='w-full rounded-t-lg' src='/section1.jpg' alt="test_image" width={200} height={200}/>
                    <div className="px-6 py-3">
                        <div className="card_text">
                            <p>
                                数年の間、教育資料が変わっておらず、適切な教育がしづらい
                            </p>
                            <p>
                                状態にある…。
                            </p>
                        </div>
                        {/*modal 2*/}
                        <div className='flex'>
                            <button className="btn3 flex mt-5" type="button" onClick={() => setShowModal_2(true)}>
                                <Image className='animate-heartbeat mr-2' src='/タッチアイコン.svg' alt="click" width={30} height={30}/>
                                    詳しくはこちら
                            </button>
                        </div>
                        {showModal_2 ? (
                        <>
                        <div className="showModal">
                            <div className="showModal_content">
                                {/*content*/}
                                <div className="showModal_detail">
                                    {/*header*/}
                                    <div className="showModal_header">
                                        <h3 className="text-xl font-semibold text-white">
                                            数年の間、教育資料が変わっておらず、適切な教育がしづらい状態にある…。
                                        </h3>
                                    </div>
                                    {/*body*/}
                                    <Splide
                                        aria-label="flow"
                                        options={{
                                        autoplay: 'pause', // 自動再生を有効
                                        interval: 3000, // 自動再生の間隔を3秒に設定
                                        }}
                                    >
                                        {/* flow1 */}                                
                                        <SplideSlide>
                                        <div className="flow">
                                            <Image src='/step_icon_01.png' alt="problem" width={270} height={270}/>
                                            <div className="flow_area">
                                                <div className="flow_step">
                                                    <p className="flow_title">
                                                        STEP.1<span className="ml-3">現状把握</span>
                                                    </p>
                                                    <p>
                                                        現状の問題点を把握して、改善すべき課題をお客様に寄り添いながら共に考えます。
                                                    </p>
                                                </div>
                                                <div className='mx-10'>
                                                    <p className="flow_title mt-3">
                                                        <span className="flow_sub_title_color">課題</span>
                                                    </p>    
                                                    <div className="mt-2">
                                                        <div className='flow_sub_title'>
                                                            <p>
                                                                講師の手間を削減。
                                                            </p>
                                                        </div>
                                                        <div className='flow_sub_text'>
                                                            <p>
                                                                講師が変わるたびに、それぞれがマニュアルを作って補足している。
                                                            </p>
                                                        </div>
                                                        <div className='flow_sub_title'>
                                                            <p>
                                                                受講者の理解度を向上。
                                                            </p>
                                                        </div>
                                                        <div className='flow_sub_text'>                                                
                                                            <p>
                                                                講師によって受講者の理解度が変わってしまう。
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>                               
                                            </div>
                                        </div>
                                        </SplideSlide>
                                        {/* flow2 */}
                                        <SplideSlide>
                                        <div className="flow">    
                                        <Image src='/step_icon_02.png' alt="problem" width={270} height={270}/>
                                        <div className="flow_area">
                                                <div className="flow_step">
                                                    <p className="flow_title">
                                                        STEP.2<span className="ml-3">解決策の企画・提案</span>
                                                    </p>
                                                    <p>
                                                        課題に対し、費用対効果を考慮しながら、最適な解決策を企画・提案いたします。
                                                    </p>
                                                    <p>    
                                                        Taira{' '}Promoteは、専門性の高いスタッフが多く在籍しています。
                                                    </p>
                                                    <p>    
                                                        最新のデジタル技術を活用し課題を解決いたします。
                                                    </p>
                                                </div>
                                                <div className='mx-10'>
                                                    <p className="flow_title mt-3">
                                                        <span className="flow_sub_title_color">企画・提案</span>
                                                    </p>
                                                    <div>
                                                        <p className="flow_sub_title mt-2">
                                                            閲覧性を向上するため、デザインフォーマットおよび文書構成を最適化を行う。
                                                        </p>
                                                        <p className="flow_sub_title mt-2">
                                                            理解度を向上するため、文章のリライトおよびビジュアル素材を設計図面からイラストへアップデート
                                                        </p>
                                                    </div>
                                                </div>    
                                            </div>
                                        </div>
                                        </SplideSlide>
                                        {/* flow3 */}
                                        <SplideSlide>
                                        <div className="flow">
                                            <Image src='/step_icon_03.png' alt="problem" width={270} height={270}/>
                                            <div className="flow_area">
                                                <div className="flow_step">
                                                    <p className="flow_title">
                                                        STEP.3<span className="ml-3">運用体制の構築</span>
                                                    </p>
                                                    <p>
                                                        一過性の活動ではなく継続的な変革にすることが重要です。
                                                        運用～定着化、成果に応じたブラッシュアップをサポートいたします。
                                                    </p>
                                                </div>
                                                <div className='mx-10'>
                                                    <p className="flow_title mt-3">
                                                        <span className="flow_sub_title_color">サポート</span>
                                                    </p>    
                                                    <div className="flow_sub_title">
                                                        <p>
                                                            講習資料の微修正は講師が対応し、大規模な修正は当社が受け持つことで随時ブラッシュアップを実施しています。
                                                        </p>
                                                    </div>
                                                </div>                               
                                            </div>
                                        </div>
                                        </SplideSlide>
                                        {/* flow4 */}
                                        <SplideSlide>
                                        <div className="flow">
                                            <Image className='mt-16' src='/step_icon_04.png' alt="problem" width={150} height={150}/>
                                            <div className="flow_area">
                                                <div className='mx-10'>
                                                    <p className="flow_title mt-5">
                                                        <span className="flow_sub_title_color">効果</span>
                                                    </p>
                                                    <div className='flow_4_text'>
                                                        <p>
                                                            均質な指導が可能になり、受講者の理解度向上しました。
                                                        </p>
                                                    </div>
                                                    <div className='flow_4_text'>
                                                        <p>
                                                            講師の講習準備の時間を8割削減しました。
                                                        </p>
                                                    </div>                                                    
                                                </div>    
                                            </div>
                                        </div>  
                                        </SplideSlide>
                                    </Splide>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button className="btn4" type="button" onClick={() => setShowModal_2(false)}>
                                            閉じる
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                        </>
                        ) : null}
                    </div>
                </div>
                {/* card_3 */}
                <div className="card_detail">
                <Image className='w-full rounded-t-lg' src='/section1.jpg' alt="test_image" width={200} height={200}/>
                    <div className="px-6 py-3">
                        <div className="card_text">
                            メンテナンス現場での情報検索が大変、サービスマンの仕事をもっとラクにしたい…。
                        </div>
                        {/*modal 3*/}
                        <div className='flex'>
                            <button className="btn3 flex mt-5" type="button" onClick={() => setShowModal_3(true)}>
                                <Image className='animate-heartbeat mr-2' src='/タッチアイコン.svg' alt="click" width={30} height={30}/>
                                    詳しくはこちら
                            </button>
                        </div>
                        {showModal_3 ? (
                        <>
                        <div className="showModal">
                            <div className="showModal_content">
                                {/*content*/}
                                <div className="showModal_detail">
                                    {/*header*/}
                                    <div className="showModal_header">
                                        <h3 className="text-xl font-semibold text-white">
                                            メンテナンス現場での情報検索が大変、サービスマンの仕事をもっとラクにしたい…。
                                        </h3>
                                    </div>
                                    {/*body*/}
                                    <Splide
                                        aria-label="flow"
                                        options={{
                                        autoplay: 'pause', // 自動再生を有効
                                        interval: 3000, // 自動再生の間隔を3秒に設定
                                        }}
                                    >
                                        {/* flow1 */}                                
                                        <SplideSlide>
                                        <div className="flow">
                                            <Image src='/step_icon_01.png' alt="problem" width={270} height={270}/>
                                            <div className="flow_area">
                                                <div className="flow_step">
                                                    <p className="flow_title">
                                                        STEP.1<span className="ml-3">現状把握</span>
                                                    </p>
                                                    <p>
                                                        現状の問題点を把握して、改善すべき課題をお客様に寄り添いながら共に考えます。
                                                    </p>
                                                </div>
                                                <div className='mx-10'>
                                                    <p className="flow_title mt-3">
                                                        <span className="flow_sub_title_color">課題</span>
                                                    </p>    
                                                    <div className="mt-2">
                                                        <div className='flow_sub_title'>
                                                            <p>
                                                                サービスマンの出張修理時の負担を軽減したい。
                                                            </p>
                                                        </div>
                                                        <div className='flow_sub_text'>
                                                            <p>
                                                                故障アラートからサービスマンが携帯した紙図面を見て、
                                                            </p>
                                                            <p>
                                                                失陥部位を特定し、目視で辿って失陥箇所を特定していく。
                                                            </p>
                                                            <p>
                                                                この手間を軽減したい。
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>                               
                                            </div>
                                        </div>
                                        </SplideSlide>
                                        {/* flow2 */}
                                        <SplideSlide>
                                        <div className="flow">    
                                        <Image src='/step_icon_02.png' alt="problem" width={270} height={270}/>
                                        <div className="flow_area">
                                                <div className="flow_step">
                                                    <p className="flow_title">
                                                        STEP.2<span className="ml-3">解決策の企画・提案</span>
                                                    </p>
                                                    <p>
                                                        課題に対し、費用対効果を考慮しながら、最適な解決策を企画・提案いたします。
                                                    </p>
                                                    <p>    
                                                        Taira{' '}Promoteは、専門性の高いスタッフが多く在籍しています。
                                                    </p>
                                                    <p>    
                                                        最新のデジタル技術を活用し課題を解決いたします。
                                                    </p>
                                                </div>
                                                <div className='mx-10'>
                                                    <p className="flow_title mt-3">
                                                        <span className="flow_sub_title_color">企画・提案</span>
                                                    </p>
                                                    <div>
                                                        <p className="flow_sub_title mt-2">
                                                            サービスマンが使用している故障診断ツールに連動して、故障発生時にその点検箇所を一目で探し当てられるように3Dで表示する。
                                                            またその3Dモデルは設計データから生成する。
                                                        </p>
                                                    </div>
                                                </div>    
                                            </div>
                                        </div>
                                        </SplideSlide>
                                        {/* flow3 */}
                                        <SplideSlide>
                                        <div className="flow">
                                            <Image src='/step_icon_03.png' alt="problem" width={270} height={270}/>
                                            <div className="flow_area">
                                                <div className="flow_step">
                                                    <p className="flow_title">
                                                        STEP.3<span className="ml-3">運用体制の構築</span>
                                                    </p>
                                                    <p>
                                                        一過性の活動ではなく継続的な変革にすることが重要です。
                                                        運用～定着化、成果に応じたブラッシュアップをサポートいたします。
                                                    </p>
                                                </div>
                                                <div className='mx-10'>
                                                    <p className="flow_title mt-3">
                                                        <span className="flow_sub_title_color">サポート</span>
                                                    </p>    
                                                    <div className="flow_sub_title">
                                                        <p>
                                                            さまざまな機種の故障コード別失陥箇所をお客様の側で入力しやすくするUIと、その作業マニュアルをご提供。
                                                        </p>
                                                    </div>
                                                </div>                               
                                            </div>
                                        </div>
                                        </SplideSlide>
                                        {/* flow4 */}
                                        <SplideSlide>
                                        <div className="flow">
                                            <Image className='mt-16' src='/step_icon_04.png' alt="problem" width={150} height={150}/>
                                            <div className="flow_area">
                                                <div className='mx-10'>
                                                    <p className="flow_title mt-5">
                                                        <span className="flow_sub_title_color">効果</span>
                                                    </p>
                                                    <div className='flow_4_text'>
                                                        <p>
                                                            サービスマンの現地修理の効率化が図られ、職場環境が向上しました。
                                                        </p>
                                                    </div>
                                                    <div className='flow_4_text'>
                                                        <p>
                                                            設計データの有効活用により、3Dモデリング等のアプリ制作費用が低減できました。
                                                        </p>
                                                    </div>                                
                                                </div>    
                                            </div>
                                        </div>  
                                        </SplideSlide>
                                    </Splide>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button className="btn4" type="button" onClick={() => setShowModal_3(false)}>
                                            閉じる
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                        </>
                        ) : null}
                    </div>
                </div>
                {/* card_4 */}
                <div className="card_detail">
                <Image className='w-full rounded-t-lg' src='/section1.jpg' alt="test_image" width={200} height={200}/>
                    <div className="px-6 py-3">
                        <div className="card_text">
                            <p>
                                紙のマニュアルで、情報共有、
                            </p> 
                            <p>
                                マニュアル更新が非効率…。
                            </p>                     
                        </div>
                        {/*modal 4*/}
                        <div className='flex mt-9'>
                            <button className="btn3 flex mt-5" type="button" onClick={() => setShowModal_4(true)}>
                                <Image className='animate-heartbeat mr-2' src='/タッチアイコン.svg' alt="click" width={30} height={30}/>
                                    詳しくはこちら
                            </button>
                        </div>
                        {showModal_4 ? (
                        <>
                        <div className="showModal">
                            <div className="showModal_content">
                                {/*content*/}
                                <div className="showModal_detail">
                                    {/*header*/}
                                    <div className="showModal_header">
                                        <h3 className="text-xl font-semibold text-white">
                                            紙ベースのマニュアルで、情報共有、マニュアル更新が非効率…。
                                        </h3>
                                    </div>
                                    {/*body*/}
                                    <Splide
                                        aria-label="flow"
                                        options={{
                                        autoplay: 'pause', // 自動再生を有効
                                        interval: 3000, // 自動再生の間隔を3秒に設定
                                        }}
                                    >
                                        {/* flow1 */}                                
                                        <SplideSlide>
                                        <div className="flow">
                                            <Image src='/step_icon_01.png' alt="problem" width={270} height={270}/>
                                            <div className="flow_area">
                                                <div className="flow_step">
                                                    <p className="flow_title">
                                                        STEP.1<span className="ml-3">現状把握</span>
                                                    </p>
                                                    <p>
                                                        現状の問題点を把握して、改善すべき課題をお客様に寄り添いながら共に考えます。
                                                    </p>
                                                </div>
                                                <div className='mx-10'>
                                                    <p className="flow_title mt-3">
                                                        <span className="flow_sub_title_color">課題</span>
                                                    </p>    
                                                    <div className="mt-2">
                                                        <div className='flow_sub_title'>
                                                            <p>
                                                                マニュアル更新作業の負担を軽減。
                                                            </p>
                                                        </div>
                                                        <div className='flow_sub_title'>
                                                            <p>
                                                                更新漏れから生じる顧客満足度の低下を避ける。
                                                            </p>
                                                        </div>
                                                        <div className='flow_sub_title'>
                                                            <p>
                                                                検索性を向上してユーザーの業務効率を改善。
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>                               
                                            </div>
                                        </div>
                                        </SplideSlide>
                                        {/* flow2 */}
                                        <SplideSlide>
                                        <div className="flow">    
                                        <Image src='/step_icon_02.png' alt="problem" width={270} height={270}/>
                                        <div className="flow_area">
                                                <div className="flow_step">
                                                    <p className="flow_title">
                                                        STEP.2<span className="ml-3">解決策の企画・提案</span>
                                                    </p>
                                                    <p>
                                                        課題に対し、費用対効果を考慮しながら、最適な解決策を企画・提案いたします。
                                                    </p>
                                                    <p>    
                                                        Taira{' '}Promoteは、専門性の高いスタッフが多く在籍しています。
                                                    </p>
                                                    <p>    
                                                        最新のデジタル技術を活用し課題を解決いたします。
                                                    </p>
                                                </div>
                                                <div className='mx-10'>
                                                    <p className="flow_title mt-3">
                                                        <span className="flow_sub_title_color">企画・提案</span>
                                                    </p>
                                                    <div>
                                                        <p className="flow_sub_title mt-2">
                                                            マニュアルにデジタル技術を活用することによって、瞬時の情報更新を実現。
                                                            ユーザーの業務効率が最適になるよう、情報量や表示フォーマットを業務の実態に合わせてご提案。
                                                        </p>
                                                        <p className="flow_sub_title mt-2">
                                                            ユーザーの入れ替わりが激しいため、一般的なスキルで操作できるように、Excelやスプレッドシートと同様の編集機能をご提案。
                                                            ユーザー教育が不要な使い勝手の良さを実現する。
                                                        </p>
                                                    </div>
                                                </div>    
                                            </div>
                                        </div>
                                        </SplideSlide>
                                        {/* flow3 */}
                                        <SplideSlide>
                                        <div className="flow">
                                            <Image src='/step_icon_03.png' alt="problem" width={270} height={270}/>
                                            <div className="flow_area">
                                                <div className="flow_step">
                                                    <p className="flow_title">
                                                        STEP.3<span className="ml-3">運用体制の構築</span>
                                                    </p>
                                                    <p>
                                                        一過性の活動ではなく継続的な変革にすることが重要です。
                                                        運用～定着化、成果に応じたブラッシュアップをサポートいたします。
                                                    </p>
                                                </div>
                                                <div className='mx-10'>
                                                    <p className="flow_title mt-3">
                                                        <span className="flow_sub_title_color">サポート</span>
                                                    </p>    
                                                    <div className="flow_sub_title">
                                                        <p>
                                                            リース後も定期的なユーザーインタビューを実施し、運用の中で生じた新たな課題には細かなアップデート提案を、実施しています。
                                                        </p>
                                                    </div>
                                                </div>                               
                                            </div>
                                        </div>
                                        </SplideSlide>
                                        {/* flow4 */}
                                        <SplideSlide>
                                        <div className="flow">
                                            <Image className='mt-16' src='/step_icon_04.png' alt="problem" width={150} height={150}/>
                                            <div className="flow_area">
                                                <div className='mx-10'>
                                                    <p className="flow_title mt-5">
                                                        <span className="flow_sub_title_color">効果</span>
                                                    </p>
                                                    <div className='flow_4_text'>
                                                        <p>
                                                            更新作業、ユーザー展開の工数を30%削減しました。
                                                        </p>
                                                    </div>
                                                    <div className='flow_4_text'>
                                                        <p>
                                                            ユーザーの教育コストを低減しました。
                                                        </p>
                                                    </div>
                                                    <div className='flow_4_text'>
                                                        <p>
                                                            ユーザーの業務効率が向上し、顧客対応がスムーズに行えるようになりました。
                                                        </p>
                                                    </div>                    
                                                </div>    
                                            </div>
                                        </div>  
                                        </SplideSlide>
                                    </Splide>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button className="btn4" type="button" onClick={() => setShowModal_4(false)}>
                                            閉じる
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                        </>
                        ) : null}
                    </div>
                </div>
            </div>
            <button type="button" className="btn1">
                <a href="https://www.tairaPromote.co.jp/work.html" target="_blank">
                    <p>
                        Taira{' '}Promoteの制作事例
                    </p>
                    <p>
                        詳しくは、HPへ
                    </p>
                </a>
            </button>
        </div>
        {/* section_3 */}
        <div className="containar3">
            <div className='cont3_title'>
                <p>
                    Taira{' '}Promote{' '}を選ぶメリット{' '}<span className="text-base">～創業以来私たちが取り組んできたのは「伝える」ための仕組みづくりです～</span>
                </p>
            </div>
            <div className='flex max-lg:w-screen px-3 text-xl font-bold'>
                <div className='text-gray-800 list-disc pt-5'>
                    <li className='mt-5 flex items-center space-x-3'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-10 h-10 mr-3 stroke-blue-900">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                            </svg>
                        </div>
                        実際の作業確認や現物での検討作業を当社スタッフが行うことで、お客様と同じ目線で企画制作にあたります。
                    </li>
                    <li className='mt-5 flex items-center space-x-3'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-10 h-10 mr-3 stroke-blue-900">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                            </svg>
                        </div>
                        専門的な知識と技術に精通したスタッフが、お客様の課題に寄り添った解決策をご提案します。
                    </li>
                    <li className='mt-5 flex items-center space-x-3'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-10 h-10 mr-3 stroke-blue-900">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                            </svg>
                        </div>
                        お客様の発展・成果に貢献すべく、企画・提案・制作・運用のサイクルを伴走いたします。
                    </li>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center pt-5">
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
            href="https://www.tairaPromote.co.jp/"
            target="_blank"
        >
            <Image src="/tp_logo.png" alt="tp_logo" width={200} height={100}/>
        </a>
        </footer>
    </div>
    );
}
  
export default Home
