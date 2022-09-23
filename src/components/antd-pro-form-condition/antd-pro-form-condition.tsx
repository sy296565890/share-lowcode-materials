import React from "react";
import { createElement, useRef } from "react";
import { 
  FormListActionType, ProForm, ProFormDependency, 
  ProFormDigitRange, ProFormList, ProFormSelect, ProFormText 
} from "@ant-design/pro-components";
import { Button, Col, Row, Space } from "antd";
import './index.scss'
import { DeleteOutlined, SisternodeOutlined, SubnodeOutlined } from "@ant-design/icons";

export interface AntdProFormConditionProps {
  hello: string;
}
const LineItem = (props: any) => {
  return <Space direction={'horizontal'} size="small" style={{ display: 'flex' }}>
    <ProFormText noStyle name="src" />
    <ProFormSelect noStyle
      fieldProps={{
        style: { width: '100px' }
      }} name="关系"
      request={async (params) => [
        { label: '等于', value: '等于' },
        { label: '在之间', value: '在之间' },
        { label: '不等于', value: '不等于' },
      ]}
    />
    <ProFormDependency name={['关系']}>
      {({ 关系 }, form) => {
        if (关系 === '在之间') {
          return <ProFormDigitRange initialValue={null} noStyle name='dist' />
        }
        return <ProFormText initialValue={null} noStyle name="dist" />
      }}
    </ProFormDependency>
  </Space>
}
const Condition = (props: any) => {
  const { data } = props;
  const actionRef = useRef<FormListActionType<{ name: string; }>>()
  return <div className={"rule-group"} style={props?.style || {}}>
    <ProFormDependency name={['conditions']}>
      {({ conditions }) => {
        if (conditions?.length > 1) {
          return <div className={'rule-relation-wrap'}>
            <div className={'rule-group-line'}>
            </div>
            <div className="rule-relation">
              <ProFormSelect fieldProps={{ style: { width: '70px' } }} name="relate"
                request={async (params) => [
                  { label: '且', value: 'and' },
                  { label: '或', value: 'or' },
                ]}
              />
            </div>
          </div>
        }
        return null;
      }}
    </ProFormDependency>
    <div className="rule-list-wrap">
      <ProFormList
        actionRef={actionRef}
        creatorButtonProps={false}
        name={["conditions"]}
        initialValue={data?.conditions}
        min={1}
        itemRender={({ listDom, action }, { index, record }) => (
          <Space direction={'horizontal'} align='center' size="small" style={{ display: 'flex', marginBlockEnd: 8 }}>
            {listDom}
          </Space>
        )}
        itemContainerRender={(doms) => {
          return <ProForm.Group>{doms}</ProForm.Group>;
        }}
      >
        {(f, index, action, count) => {
          const x = action.getCurrentRowData()
          if (!x) return null
          if (x.conditions) return (<Condition parentRef={actionRef} parent={{ ref: actionRef, f, index, action, count }} data={x.conditions} />)
          return (
            <Row justify="space-between" align="middle">
              <Col style={{ width: 'calc(100% - 112px)' }}>
                <LineItem /> 
              </Col>
              <Col flex="100px" style={{ border: 'solid 0px red' }}>
                <Space direction={'horizontal'} align='center' size="small" style={{ display: 'flex' }}>
                  <Button type="text" style={{ padding: 0 }} disabled={!props?.parent?.action} onClick={() => {
                    const row = action.getCurrentRowData();
                    action.add({
                      ...row,
                      id: new Date().getTime(),
                    })
                  }}>{<SisternodeOutlined />}</Button>
                  <span onClick={() => {
                    const row = action.getCurrentRowData();
                    action.setCurrentRowData?.({
                      relate: 'and',
                      conditions: [
                        row,
                        {
                          ...row,
                          id: new Date().getTime(),
                        }
                      ]
                    });
                  }}>{<SubnodeOutlined />}</span>
                  <Button type="text" style={{ padding: 0 }} disabled={!props?.parent?.action} onClick={() => {
                    if (count > 2) action.remove(index)
                    else {
                      const parentAction = props?.parent?.action;
                      const all = parentAction?.getCurrentRowData();
                      const row = all?.conditions?.find((_, i) => i !== index);
                      try {
                        parentAction.setCurrentRowData?.({
                          ...row,
                          conditions: null
                        });
                      } catch (e) {
                      }
                    }
                  }}>{<DeleteOutlined />}</Button>            
                </Space>
              </Col>
            </Row>
          )
        }}
      </ProFormList>
    </div>
  </div>
}
const AntdProFormCondition: React.FC<AntdProFormConditionProps> = (props: any) => {
  return <ProForm
    submitter={false}
    labelCol={{ span: 6 }}
    wrapperCol={{ span: 18 }}
    style={{ border: 'solid 0px red', height: 800 }}
    initialValues={{
      "conditions": [
        {
          "relate": "and",
          "conditions": [
            {
              "relate": "or",
              "conditions": null
            },
            {
              "relate": "or",
              "conditions": null,
              "id": 1662283151750
            }
          ]
        }
      ],
      conditions2: [
        {
          relate: 'and',
          conditions: [
            {
              src: 'src',
              relate: 'and',
              dist: 'dist',
            },
            {
              src: 'src',
              relate: 'or',
              dist: 'dist',
            },
            {
              relate: 'or',
              conditions: [
                {
                  src: 'src',
                  relate: 'and',
                  dist: 'dist',
                },
                {
                  src: 'src',
                  relate: 'or',
                  dist: 'dist',
                },
                {
                  relate: 'or',
                  conditions: [
                    {
                      src: 'src',
                      relate: 'and',
                      dist: 'dist',
                    },
                    {
                      src: 'src',
                      relate: 'or',
                      dist: 'dist',
                    },
                  ],
                },
              ],
            },
          ]
        }
      ]
    }}
  >
    <div style={{ marginLeft: -92 }}>
      <Condition hideAction={true} />
    </div>
    <ProForm.Item noStyle shouldUpdate>
      {(form) => {
        return <pre>
          {JSON.stringify(form.getFieldsValue(), null, 2)}
        </pre>
      }}
    </ProForm.Item>
  </ProForm>
}

export default AntdProFormCondition;