import{e as t,l as n,E as p,a0 as a,cu as s}from"./index.2d320a5e.js";import{G as u}from"./GridItem.7aeaf0dd.js";import"./Folder.0c9f6f57.js";import{a as c}from"./helper.e57ac359.js";import"./index.a9c7f046.js";import"./index.69f8ae60.js";import"./ImageWithError.86a5af63.js";import"./icon.646b5c0d.js";import"./index.5f6d6321.js";import"./Layout.1cac79eb.js";import"./FolderTree.401fd5b0.js";import"./index.f231c87a.js";import"./video_box.f15801c8.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./Paginator.e371c8ae.js";import"./index.90a62927.js";const v=()=>{const{isMouseSupported:r,registerSelectContainer:e,captureContentMenu:o}=c();return e(),t(s,{"oncapture:contextmenu":o,get classList(){return{"viselect-container":r()}},w:"$full",gap:"$1",get templateColumns(){return`repeat(auto-fill, minmax(${parseInt(n.grid_item_size)+20}px,1fr))`},get children(){return t(p,{get each(){return a.objs},children:(i,m)=>t(u,{obj:i,get index(){return m()}})})}})};export{v as default};