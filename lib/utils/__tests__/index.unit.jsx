import {formatClasses} from '../index'

describe('formatClasses',()=>{
  it('能根据参数返回 class', ()=> {
    expect(formatClasses('foo')).toEqual('foo')
  })
  it('不传参数返回空字符串', ()=> {
    expect(formatClasses()).toEqual('')
  })
  it('多个参数能返回多个 class', ()=> {
    expect(formatClasses('foo','bar','wow')).toEqual('foo bar wow')
  })
  it('能过滤参数为 undefined 的情况', ()=> {
    expect(formatClasses('foo', undefined)).toEqual('foo')
  })
  it('能过滤参数为 null 的情况', ()=> {
    expect(formatClasses('foo', undefined)).toEqual('foo')
  })
  it('能过滤参数为 false 的情况', ()=> {
    expect(formatClasses('foo', false)).toEqual('foo')
  })
})