"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[254],{1061:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-3a355013",path:"/docs/configuration/brokers.html",title:"Cluster configuration",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Basic cluster with plain auth",slug:"basic-cluster-with-plain-auth",children:[]},{level:2,title:"Example for Confluent Cloud",slug:"example-for-confluent-cloud",children:[]},{level:2,title:"SSL Kafka Cluster",slug:"ssl-kafka-cluster",children:[]},{level:2,title:"OAuth2 authentification for brokers",slug:"oauth2-authentification-for-brokers",children:[]}],filePathRelative:"docs/configuration/brokers.md",git:{updatedTime:1659164301e3,contributors:[{name:"Ludovic DEHON",email:"tchiot.ludo@gmail.com",commits:1}]}}},3249:(s,n,a)=>{a.r(n),a.d(n,{default:()=>_});var e=a(6252);const t=(0,e._)("h1",{id:"cluster-configuration",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#cluster-configuration","aria-hidden":"true"},"#"),(0,e.Uk)(" Cluster configuration")],-1),o=(0,e._)("code",null,"akhq.connections",-1),p=(0,e.Uk)(" is a key value configuration with : "),l=(0,e._)("li",null,[(0,e._)("code",null,"key"),(0,e.Uk)(": must be an url friendly (letter, number, _, -, ... dot are not allowed here) string to identify your cluster ("),(0,e._)("code",null,"my-cluster-1"),(0,e.Uk)(" and "),(0,e._)("code",null,"my-cluster-2"),(0,e.Uk)(" is the example above)")],-1),u=(0,e._)("code",null,"properties",-1),c=(0,e.Uk)(": all the configurations found on "),r={href:"https://kafka.apache.org/documentation/#consumerconfigs",target:"_blank",rel:"noopener noreferrer"},i=(0,e.Uk)("Kafka consumer documentation"),k=(0,e.Uk)(". Most important is "),d=(0,e._)("code",null,"bootstrap.servers",-1),b=(0,e.Uk)(" that is a list of host:port of your Kafka brokers."),m=(0,e.uE)("<li><code>schema-registry</code>: <em>(optional)</em><ul><li><code>url</code>: the schema registry url</li><li><code>type</code>: the type of schema registry used, either &#39;confluent&#39; or &#39;tibco&#39;</li><li><code>basic-auth-username</code>: schema registry basic auth username</li><li><code>basic-auth-password</code>: schema registry basic auth password</li><li><code>properties</code>: all the configurations for registry client, especially ssl configuration</li></ul></li><li><code>connect</code>: <em>(optional list, define each connector as an element of a list)</em><ul><li><code>name</code>: connect name</li><li><code>url</code>: connect url</li><li><code>basic-auth-username</code>: connect basic auth username</li><li><code>basic-auth-password</code>: connect basic auth password</li><li><code>ssl-trust-store</code>: /app/truststore.jks</li><li><code>ssl-trust-store-password</code>: trust-store-password</li><li><code>ssl-key-store</code>: /app/truststore.jks</li><li><code>ssl-key-store-password</code>: key-store-password</li></ul></li>",2),h=(0,e.uE)('<h2 id="basic-cluster-with-plain-auth" tabindex="-1"><a class="header-anchor" href="#basic-cluster-with-plain-auth" aria-hidden="true">#</a> Basic cluster with plain auth</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">akhq</span><span class="token punctuation">:</span>\n  <span class="token key atrule">connections</span><span class="token punctuation">:</span>\n    <span class="token key atrule">local</span><span class="token punctuation">:</span>\n      <span class="token key atrule">properties</span><span class="token punctuation">:</span>\n        <span class="token key atrule">bootstrap.servers</span><span class="token punctuation">:</span> <span class="token string">&quot;local:9092&quot;</span>\n      <span class="token key atrule">schema-registry</span><span class="token punctuation">:</span>\n        <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;http://schema-registry:8085&quot;</span>\n      <span class="token key atrule">connect</span><span class="token punctuation">:</span>\n        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;connect&quot;</span>\n          <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;http://connect:8083&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="example-for-confluent-cloud" tabindex="-1"><a class="header-anchor" href="#example-for-confluent-cloud" aria-hidden="true">#</a> Example for Confluent Cloud</h2><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">akhq</span><span class="token punctuation">:</span>\n  <span class="token key atrule">connections</span><span class="token punctuation">:</span>\n    <span class="token key atrule">ccloud</span><span class="token punctuation">:</span>\n      <span class="token key atrule">properties</span><span class="token punctuation">:</span>\n        <span class="token key atrule">bootstrap.servers</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ cluster }}.{{ region }}.{{ cloud }}.confluent.cloud:9092&quot;</span>\n        <span class="token key atrule">security.protocol</span><span class="token punctuation">:</span> SASL_SSL\n        <span class="token key atrule">sasl.mechanism</span><span class="token punctuation">:</span> PLAIN\n        <span class="token key atrule">sasl.jaas.config</span><span class="token punctuation">:</span> org.apache.kafka.common.security.plain.PlainLoginModule required username=&quot;<span class="token punctuation">{</span><span class="token punctuation">{</span> kafkaUsername <span class="token punctuation">}</span><span class="token punctuation">}</span>&quot; password=&quot;<span class="token punctuation">{</span><span class="token punctuation">{</span> kafkaPassword <span class="token punctuation">}</span><span class="token punctuation">}</span>&quot;;\n      <span class="token key atrule">schema-registry</span><span class="token punctuation">:</span>\n        <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://{{ cluster }}.{{ region }}.{{ cloud }}.confluent.cloud&quot;</span>\n        <span class="token key atrule">basic-auth-username</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ schemaRegistryUsername }}&quot;</span>\n        <span class="token key atrule">basic-auth-password</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ schemaRegistryPaswword }}&quot;</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="ssl-kafka-cluster" tabindex="-1"><a class="header-anchor" href="#ssl-kafka-cluster" aria-hidden="true">#</a> SSL Kafka Cluster</h2><p>Configuration example for kafka cluster secured by ssl for saas provider like aiven (full https &amp; basic auth):</p><p>You need to generate a jks &amp; p12 file from pem, cert files give by saas provider.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>openssl pkcs12 -export -inkey service.key -in service.cert -out client.keystore.p12 -name service_key\nkeytool -import -file ca.pem -alias CA -keystore client.truststore.jks\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Configurations will look like this example:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">akhq</span><span class="token punctuation">:</span>\n  <span class="token key atrule">connections</span><span class="token punctuation">:</span>\n    <span class="token key atrule">ssl-dev</span><span class="token punctuation">:</span>\n      <span class="token key atrule">properties</span><span class="token punctuation">:</span>\n        <span class="token key atrule">bootstrap.servers</span><span class="token punctuation">:</span> <span class="token string">&quot;{{host}}.aivencloud.com:12835&quot;</span>\n        <span class="token key atrule">security.protocol</span><span class="token punctuation">:</span> SSL\n        <span class="token key atrule">ssl.truststore.location</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>path<span class="token punctuation">}</span><span class="token punctuation">}</span>/avnadmin.truststore.jks\n        <span class="token key atrule">ssl.truststore.password</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>password<span class="token punctuation">}</span><span class="token punctuation">}</span>\n        <span class="token key atrule">ssl.keystore.type</span><span class="token punctuation">:</span> <span class="token string">&quot;PKCS12&quot;</span>\n        <span class="token key atrule">ssl.keystore.location</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>path<span class="token punctuation">}</span><span class="token punctuation">}</span>/avnadmin.keystore.p12\n        <span class="token key atrule">ssl.keystore.password</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>password<span class="token punctuation">}</span><span class="token punctuation">}</span>\n        <span class="token key atrule">ssl.key.password</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>password<span class="token punctuation">}</span><span class="token punctuation">}</span>\n      <span class="token key atrule">schema-registry</span><span class="token punctuation">:</span>\n        <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://{{host}}.aivencloud.com:12838&quot;</span>\n        <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&quot;confluent&quot;</span>\n        <span class="token key atrule">basic-auth-username</span><span class="token punctuation">:</span> avnadmin\n        <span class="token key atrule">basic-auth-password</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>password<span class="token punctuation">}</span><span class="token punctuation">}</span>\n        <span class="token key atrule">properties</span><span class="token punctuation">:</span>\n          <span class="token key atrule">schema.registry.ssl.truststore.location</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>path<span class="token punctuation">}</span><span class="token punctuation">}</span>/avnadmin.truststore.jks\n          <span class="token key atrule">schema.registry.ssl.truststore.password</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>password<span class="token punctuation">}</span><span class="token punctuation">}</span>\n      <span class="token key atrule">connect</span><span class="token punctuation">:</span>\n        <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> connect<span class="token punctuation">-</span><span class="token number">1</span>\n          <span class="token key atrule">url</span><span class="token punctuation">:</span> <span class="token string">&quot;https://{{host}}.aivencloud.com:{{port}}&quot;</span>\n          <span class="token key atrule">basic-auth-username</span><span class="token punctuation">:</span> avnadmin\n          <span class="token key atrule">basic-auth-password</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>password<span class="token punctuation">}</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="oauth2-authentification-for-brokers" tabindex="-1"><a class="header-anchor" href="#oauth2-authentification-for-brokers" aria-hidden="true">#</a> OAuth2 authentification for brokers</h2><p>Requirement Library Strimzi:</p><blockquote><p>The kafka brokers must be configured with the Strimzi library and an OAuth2 provider (Keycloak example).</p></blockquote>',13),y=(0,e.Uk)("This "),f={href:"https://github.com/strimzi/strimzi-kafka-oauth",target:"_blank",rel:"noopener noreferrer"},g=(0,e.Uk)("repository"),q=(0,e.Uk)(" contains documentation and examples."),v=(0,e.uE)('<p>Configuration Bootstrap:</p><blockquote><p>It&#39;s not necessary to compile AKHQ to integrate the Strimzi libraries since the libs will be included on the final image !</p></blockquote><p>You must configure AKHQ through the application.yml file.</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">akhq</span><span class="token punctuation">:</span>\n  <span class="token key atrule">connections</span><span class="token punctuation">:</span>\n    <span class="token key atrule">my-kafka-cluster</span><span class="token punctuation">:</span>\n      <span class="token key atrule">properties</span><span class="token punctuation">:</span>\n        <span class="token key atrule">bootstrap.servers</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;url broker kafka&gt;:9094,&lt;url broker kafka&gt;:9094&quot;</span>\n        <span class="token key atrule">sasl.jaas.config</span><span class="token punctuation">:</span> org.apache.kafka.common.security.oauthbearer.OAuthBearerLoginModule required auth.valid.issuer.uri=&quot;https<span class="token punctuation">:</span>//&lt;url keycloak<span class="token punctuation">&gt;</span>/auth/realms/sandbox_kafka&quot; oauth.jwks.endpoint.uri=&quot;https<span class="token punctuation">:</span>/&lt;url keycloak<span class="token punctuation">&gt;</span>//auth/realms/sandbox_kafka/protocol/openid<span class="token punctuation">-</span>connect/certs&quot; oauth.username.claim=&quot;preferred_username&quot; oauth.client.id=&quot;kafka<span class="token punctuation">-</span>producer<span class="token punctuation">-</span>client&quot; oauth.client.secret=&quot;&quot; oauth.ssl.truststore.location=&quot;kafka.server.truststore.jks&quot; oauth.ssl.truststore.password=&quot;xxxxx&quot; oauth.ssl.truststore.type=&quot;jks&quot; oauth.ssl.endpoint_identification_algorithm=&quot;&quot; oauth.token.endpoint.uri=&quot;https<span class="token punctuation">:</span>///auth/realms/sandbox_kafka/protocol/openid<span class="token punctuation">-</span>connect/token&quot;;\n        <span class="token key atrule">sasl.login.callback.handler.class</span><span class="token punctuation">:</span> io.strimzi.kafka.oauth.client.JaasClientOauthLoginCallbackHandler\n        <span class="token key atrule">security.protocol</span><span class="token punctuation">:</span> SASL_PLAINTEXT\n        <span class="token key atrule">sasl.mechanism</span><span class="token punctuation">:</span> OAUTHBEARER\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>I put oauth.ssl.endpoint_identification_algorithm = &quot;&quot; for testing or my certificates did not match the FQDN. In a production, you have to remove it.</p>',5),w={},_=(0,a(3744).Z)(w,[["render",function(s,n){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("ul",null,[(0,e._)("li",null,[o,p,(0,e._)("ul",null,[l,(0,e._)("li",null,[u,c,(0,e._)("a",r,[i,(0,e.Wm)(a)]),k,d,b]),m])])]),h,(0,e._)("blockquote",null,[(0,e._)("p",null,[y,(0,e._)("a",f,[g,(0,e.Wm)(a)]),q])]),v],64)}]])},3744:(s,n)=>{n.Z=(s,n)=>{for(const[a,e]of n)s[a]=e;return s}}}]);