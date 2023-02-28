import {customElements, Control, Module,Styles, Progress} from '@ijstech/components';
import './timeline.css';

@customElements('i-timeline-module')
export class TimeLineModule extends Module{

    constructor(parent?: Control, options?: any) {        
        super(parent, options);        
    }
    
    render() {
        var data = [{
            label: 'Q2 - 2021',
            list: ['Dex Aggreator (BSC)', 'Strategic Partnership', 'Range & Group Queues (Testnet)']
        }, {
            label: 'Q3 - 2021',
            list: ['Dex Aggreator (BSC)', 'Strategic Partnership', 'Range & Group Queues (Testnet)']
        }, {
            label: 'Q4 - 2021',
            list: ['Dex Aggreator (BSC)', 'Strategic Partnership', 'Range & Group Queues (Testnet)']
        }, {
            label: 'Q1 - 2022',
            list: ['Dex Aggreator (BSC)', 'Strategic Partnership', 'Range & Group Queues (Testnet)']
        }];
        var datas = JSON.stringify(data);

        const popupData = {
            start: {
                defaultLabel: 'Start',
                progressingLabel: 'Progressing',
                succeedLabel: 'Succeed',
                failedLabel: 'Failed',
                list: [
                    { label: 'BLOCK BEHIND <br/> <span class="lb-value">0 BLOCK</span>' },
                    { label: 'Progress', value: '100%' },
                    { label: 'Current Block', value: '#14397339' },
                    { label: 'Final Block', value: '#14397339' }
                ]
            },
            end: {
                list: [
                    { label: 'BLOCK BEHIND <br/> <span class="lb-value">0 BLOCK</span>' },
                    { label: 'Progress', value: '100%' },
                    { label: 'Current Block', value: '#14397339' },
                    { label: 'Final Block', value: '#14397339' }
                ]
            }
        }

        const itemPopupData1 = {
            label: '+2',
            heading: 'Indexers • 2',
            list: [
                {
                    icon: '<i-icon name="user" fill="#fff"></i-icon>',
                    value: '<span class="lb-label lb-red">0x5161—1b898c • 74.9%</span> <br/> <span class="lb-value">3 612 235</span> Blocks behind'
                },
                {
                    icon: '<i-icon name="user" fill="#fff"></i-icon>',
                    value: '<span class="lb-label lb-red">0x5161—1b898c • 74.9%</span> <br/> <span class="lb-value">3 612 235</span> Blocks behind'
                }
            ]
        }

        const itemPopupData2 = {
            label: '+6',
            heading: 'Indexers • 6',
            list: [
                {
                    icon: '<i-icon name="user" fill="#fff"></i-icon>',
                    value: '<span class="lb-label">0x5161—1b898c • 74.9%</span> <br/> <span class="lb-value">3 612 235</span> Blocks behind'
                },
                {
                    icon: '<i-icon name="user" fill="#fff"></i-icon>',
                    value: '<span class="lb-label">0x5161—1b898c • 74.9%</span> <br/> <span class="lb-value">3 612 235</span> Blocks behind'
                },
                {
                    icon: '<i-icon name="user" fill="#fff"></i-icon>',
                    value: '<span>0x5161—1b898c • 74.9%</span> <br/> <span class="lb-value">3 612 235</span> Blocks behind'
                },
                {
                    icon: '<i-icon name="user" fill="#fff"></i-icon>',
                    value: '<span class="lb-label">0x5161—1b898c • 74.9%</span> <br/> <span class="lb-value">3 612 235</span> Blocks behind'
                }, {
                    icon: '<i-icon name="user" fill="#fff"></i-icon>',
                    value: '<span class="lb-label">0x5161—1b898c • 74.9%</span> <br/> <span class="lb-value">3 612 235</span> Blocks behind'
                },
                {
                    icon: '<i-icon name="user" fill="#fff"></i-icon>',
                    value: '<span class="lb-label">0x5161—1b898c • 74.9%</span> <br/> <span class="lb-value">3 612 235</span> Blocks behind'
                }
            ]
        }

        Styles.Theme.applyTheme(Styles.Theme.darkTheme);

        return (
            <i-panel width="100%">
                <i-panel>
                    <i-timeline data={datas} pointColor='pink' titleColor='yellow' textColor='#fff' popupColor='#2f1e3b' ></i-timeline>
                </i-panel>
                <i-panel class="mt-10">
                    <i-progress id="progress1" percent={100} data={JSON.stringify(popupData)}>
                        <i-progress-item percent={50} status="exception" data={JSON.stringify(itemPopupData1)} />
                        <i-progress-item percent={65.7}>
                            <i-icon name="user" fill="grey" width="10px" height="10px" />
                            <i-slot name="tooltip">
                                <i-panel>
                                    <i-row flex width="100%" class="mb-1">
                                        <i-col span={2}>
                                            <i-icon name="user" fill="#fff" width="10px" height="10px" />
                                        </i-col>
                                        <i-col span={10}>
                                            <i-panel><i-label caption="Indexing"></i-label></i-panel>
                                            <i-panel><i-label caption="stakefish-indexer.eth"></i-label></i-panel>
                                        </i-col>
                                    </i-row>
                                    <i-panel width="100%"><i-progress percent={65.7} showInfo={false}></i-progress></i-panel>
                                    <i-row flex justify="space-between" width="100%" class="mb-1">
                                        <i-col span={6}>
                                            <i-panel><i-label caption="Progress"></i-label></i-panel>
                                            <i-panel><i-label caption="65.7%"></i-label></i-panel>
                                        </i-col>
                                        <i-col span={6}>
                                            <i-panel><i-label caption="Blocks behind"></i-label></i-panel>
                                            <i-panel><i-label caption="8 861 512 BLOCKS"></i-label></i-panel>
                                        </i-col>
                                    </i-row>
                                    <i-label caption="Served data is 1353 days 20 hours 12 minutes behind chain head"></i-label>
                                </i-panel>
                            </i-slot>
                        </i-progress-item>
                        <i-progress-item percent={100} status="success" data={JSON.stringify(itemPopupData2)} />
                    </i-progress>
                </i-panel>

                <i-panel class="mt-10">
                    <i-progress percent={60} strokeWidth={5} data={JSON.stringify(popupData)}>
                    </i-progress>
                </i-panel>

                <i-panel class="mt-10">
                    <i-progress percent={60} strokeWidth={5} status="exception"></i-progress>
                </i-panel>

                <i-panel class="mt-10">
                    <i-progress percent={0} strokeWidth={5} loading={true}></i-progress>
                </i-panel>

                <i-panel class="mt-10">
                    <i-progress percent={78.6} steps={5}></i-progress>
                </i-panel>

                <i-panel class="mt-10">
                    <i-progress percent={25} type="circle" width={126} height={126} status="warning"></i-progress>
                </i-panel>

                <i-panel class="mt-10">
                    <i-progress percent={100} type="circle" width={126} height={126}></i-progress>
                </i-panel>
            </i-panel>
        )
    }
}