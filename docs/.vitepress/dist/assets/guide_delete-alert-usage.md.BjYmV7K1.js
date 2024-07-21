import{_ as s,c as a,o as e,a5 as n}from"./chunks/framework.Bb1cnhPJ.js";const g=JSON.parse('{"title":"Sử dụng Alert khi Xóa","description":"","frontmatter":{},"headers":[],"relativePath":"guide/delete-alert-usage.md","filePath":"guide/delete-alert-usage.md"}'),i={name:"guide/delete-alert-usage.md"},t=n(`<h1 id="su-dung-alert-khi-xoa" tabindex="-1">Sử dụng Alert khi Xóa <a class="header-anchor" href="#su-dung-alert-khi-xoa" aria-label="Permalink to &quot;Sử dụng Alert khi Xóa&quot;">​</a></h1><p>Khi nhấn vào icon xóa, chúng ta sử dụng một alert để xác nhận hành động xóa. Đây là cách thực hiện:</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const handleDeleteClick = (id) =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  deleteProductId.value = id</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  proxy.$swal({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    title: &#39;Delete product&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    message: &#39;Are you sure delete this product?&#39;,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    showCancelButton: true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .then((res) =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    if (res.isConfirmed) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      confirmDelete()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const confirmDelete = () =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  products.value = products.value.filter((product) =&gt; product.id !== deleteProductId.value)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  flashMessage.fire(&#39;Product has been deleted!&#39;, &#39;success&#39;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,3),l=[t];function p(h,d,r,c,E,k){return e(),a("div",null,l)}const u=s(i,[["render",p]]);export{g as __pageData,u as default};
