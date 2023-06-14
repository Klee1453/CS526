import{_ as p}from"./fig01_chineseWall-64266bca.js";import{_ as h,r as d,o as m,c as f,a as l,d as t,b as e,w as a,e as i}from"./app-eef777f9.js";const _={},y=i('<h1 id="integrity-protection-models" tabindex="-1"><a class="header-anchor" href="#integrity-protection-models" aria-hidden="true">#</a> Integrity Protection Models</h1><h2 id="related-readings-for-this-lecture" tabindex="-1"><a class="header-anchor" href="#related-readings-for-this-lecture" aria-hidden="true">#</a> Related Readings for This Lecture</h2><ul><li>Related Papers (Optiona): <ul><li>Kenneth J. Biba: &quot;Integrity Considerations for Secure Computer Systems&quot;, MTR-3153, The Mitre Corporation, April 1977.</li><li>David D. Clark and David R. Wilson. “A Comparison of Commercial and Military Computer Security Policies.” In IEEE SSP 1987.</li><li>David FC. Brewer and Michael J. Nash. “The Chinese Wall Security Policy.” in IEEE SSP 1989.</li></ul></li></ul><h2 id="motivations" tabindex="-1"><a class="header-anchor" href="#motivations" aria-hidden="true">#</a> Motivations</h2><ul><li>BLP focuses on confidentiality</li><li>In most systems, integrity is equally, if not more, important</li><li>Data integrity vs. System integrity <ul><li>Data integrity means that data cannot be changed without being detected.</li></ul></li></ul><h2 id="what-is-integrity-in-systems" tabindex="-1"><a class="header-anchor" href="#what-is-integrity-in-systems" aria-hidden="true">#</a> What is integrity in systems?</h2><ul><li>Attempt 1: Critical data do not change.</li><li>Attempt 2: Critical data changed only in “correct ways” <ul><li>E.g., in DB, integrity constraints are used for consistency</li></ul></li><li>Attempt 3: Critical data changed only through certain “trusted programs”</li><li>Attempt 4: Critical data changed only as intended by authorized users.</li></ul><h2 id="biba-integrity-levels" tabindex="-1"><a class="header-anchor" href="#biba-integrity-levels" aria-hidden="true">#</a> Biba: Integrity Levels</h2><ul><li>Each subject (process) has an integrity level</li><li>Each object has an integrity level</li><li>Integrity levels are totally ordered</li><li>Integrity levels different from security levels in confidentiality protection <ul><li>Highly sensitive data may have low integrity</li><li>What is an example of a piece of data that needs high integrity, but no confidentiality?</li></ul></li></ul><h2 id="strict-integrity-policy-blp-reversed" tabindex="-1"><a class="header-anchor" href="#strict-integrity-policy-blp-reversed" aria-hidden="true">#</a> Strict Integrity Policy (BLP reversed)</h2>',10),g={class:"katex"},b={class:"katex-mathml"},w=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.75em;"></span><span class="strut bottom" style="height:1em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit">i</span><span class="mopen">(</span><span class="mord mathit">s</span><span class="mclose">)</span><span class="mrel">≤</span><span class="mord mathit">i</span><span class="mopen">(</span><span class="mord mathit">o</span><span class="mclose">)</span></span></span>',1),v=l("ul",null,[l("li",null,"no read down"),l("li",null,"stops indirect sabotage by contaminated data")],-1),x={class:"katex"},k={class:"katex-mathml"},j=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.75em;"></span><span class="strut bottom" style="height:1em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit">i</span><span class="mopen">(</span><span class="mord mathit">s</span><span class="mclose">)</span><span class="mrel">≥</span><span class="mord mathit">i</span><span class="mopen">(</span><span class="mord mathit">o</span><span class="mclose">)</span></span></span>',1),I=l("ul",null,[l("li",null,"no write up"),l("li",null,"stops directly malicious modification"),l("li",null,"Fixed integrity levels"),l("li",null,"No information path from low object/subject to high object/subject")],-1),C=l("h2",{id:"subject-low-water-policy",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#subject-low-water-policy","aria-hidden":"true"},"#"),t(" Subject Low-Water Policy")],-1),P={class:"katex"},S={class:"katex-mathml"},T=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.75em;"></span><span class="strut bottom" style="height:1em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit">i</span><span class="mopen">(</span><span class="mord mathit">s</span><span class="mclose">)</span><span class="mrel">←</span><span class="mop">min</span><span class="mopen">[</span><span class="mord mathit">i</span><span class="mopen">(</span><span class="mord mathit">s</span><span class="mclose">)</span><span class="mpunct">,</span><span class="mord mathit">i</span><span class="mopen">(</span><span class="mord mathit">o</span><span class="mclose">)</span><span class="mclose">]</span></span></span>',1),A={class:"katex"},D={class:"katex-mathml"},E=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.75em;"></span><span class="strut bottom" style="height:1em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit">i</span><span class="mopen">(</span><span class="mord mathit">s</span><span class="mclose">)</span><span class="mrel">≥</span><span class="mord mathit">i</span><span class="mopen">(</span><span class="mord mathit">o</span><span class="mclose">)</span></span></span>',1),M=l("li",null,"Subject’s integrity level decreases as reading lower integrity data",-1),R=l("li",null,"No information path from low-object to high-object",-1),W=l("h2",{id:"object-low-water-mark-policy",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#object-low-water-mark-policy","aria-hidden":"true"},"#"),t(" Object Low-Water Mark Policy")],-1),B={class:"katex"},L={class:"katex-mathml"},N=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.75em;"></span><span class="strut bottom" style="height:1em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit">i</span><span class="mopen">(</span><span class="mord mathit">s</span><span class="mclose">)</span><span class="mrel">≤</span><span class="mord mathit">i</span><span class="mopen">(</span><span class="mord mathit">o</span><span class="mclose">)</span></span></span>',1),q={class:"katex"},F={class:"katex-mathml"},H=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.75em;"></span><span class="strut bottom" style="height:1em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit">i</span><span class="mopen">(</span><span class="mord mathit">o</span><span class="mclose">)</span><span class="mrel">←</span><span class="mop">min</span><span class="mopen">[</span><span class="mord mathit">i</span><span class="mopen">(</span><span class="mord mathit">s</span><span class="mclose">)</span><span class="mpunct">,</span><span class="mord mathit">i</span><span class="mopen">(</span><span class="mord mathit">o</span><span class="mclose">)</span><span class="mclose">]</span></span></span>',1),O=l("li",null,"Object’s integrity level decreases as it is contaminated by subjects",-1),V=l("li",null,"In the end, objects that have high labels have not been contaminated",-1),U=l("h2",{id:"low-water-mark-integrity-audit-policy",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#low-water-mark-integrity-audit-policy","aria-hidden":"true"},"#"),t(" Low-Water Mark Integrity Audit Policy")],-1),z={class:"katex"},J={class:"katex-mathml"},K=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.75em;"></span><span class="strut bottom" style="height:1em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit">i</span><span class="mopen">(</span><span class="mord mathit">s</span><span class="mclose">)</span><span class="mrel">←</span><span class="mop">min</span><span class="mopen">[</span><span class="mord mathit">i</span><span class="mopen">(</span><span class="mord mathit">s</span><span class="mclose">)</span><span class="mpunct">,</span><span class="mord mathit">i</span><span class="mopen">(</span><span class="mord mathit">o</span><span class="mclose">)</span><span class="mclose">]</span></span></span>',1),G={class:"katex"},Q={class:"katex-mathml"},X=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.75em;"></span><span class="strut bottom" style="height:1em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit">i</span><span class="mopen">(</span><span class="mord mathit">o</span><span class="mclose">)</span><span class="mrel">←</span><span class="mop">min</span><span class="mopen">[</span><span class="mord mathit">i</span><span class="mopen">(</span><span class="mord mathit">s</span><span class="mclose">)</span><span class="mpunct">,</span><span class="mord mathit">i</span><span class="mopen">(</span><span class="mord mathit">o</span><span class="mclose">)</span><span class="mclose">]</span></span></span>',1),Y=l("li",null,"Tracing, but not preventing contamination",-1),Z=l("li",null,"Similar to the notion of tainting in software security",-1),$=l("h2",{id:"the-ring-policy",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#the-ring-policy","aria-hidden":"true"},"#"),t(" The Ring Policy")],-1),ee=l("li",null,"Any subject can read any object",-1),ae={class:"katex"},te={class:"katex-mathml"},le=i('<span class="katex-html" aria-hidden="true"><span class="strut" style="height:0.75em;"></span><span class="strut bottom" style="height:1em;vertical-align:-0.25em;"></span><span class="base textstyle uncramped"><span class="mord mathit">i</span><span class="mopen">(</span><span class="mord mathit">s</span><span class="mclose">)</span><span class="mrel">≥</span><span class="mord mathit">i</span><span class="mopen">(</span><span class="mord mathit">o</span><span class="mclose">)</span></span></span>',1),se=l("li",null,"Integrity levels of subjects and objects are fixed.",-1),ne=l("li",null,[t("Intuitions: "),l("ul",null,[l("li",null,"subjects are trusted to process low-level inputs correctly")])],-1),ie=i('<h2 id="five-mandatory-policies-in-biba" tabindex="-1"><a class="header-anchor" href="#five-mandatory-policies-in-biba" aria-hidden="true">#</a> Five Mandatory Policies in Biba</h2><ul><li>Strict integrity policy</li><li>Subject low-water mark policy</li><li>Object low-water mark policy</li><li>Low-water mark Integrity audit policy</li><li>Ring policy</li><li>In practice, one may be using one or more of these policies, possibly applying different policies to different subjects <ul><li>E.g., subjects for which ring policy is applied are trusted to be able to correctly handle inputs</li></ul></li></ul><h2 id="object-integrity-levels" tabindex="-1"><a class="header-anchor" href="#object-integrity-levels" aria-hidden="true">#</a> Object Integrity Levels</h2><ul><li>The integrity level of an object may be based on <ul><li><strong>Quality</strong> of information (levels may change) <ul><li>Degree of trustworthiness</li><li>Contamination level:</li></ul></li><li><strong>Importance</strong> of the object (levels do not change) <ul><li>Degree of being trusted</li><li>Protection level: writing to the objects should be protected</li></ul></li></ul></li><li>What should be the relationship between the two meanings, which one should be higher?</li></ul><h2 id="trusted-vs-trustworthy" tabindex="-1"><a class="header-anchor" href="#trusted-vs-trustworthy" aria-hidden="true">#</a> Trusted vs. Trustworthy</h2><ul><li>A component of a system is trusted means that <ul><li>the security of the system depends on it</li><li>failure of component can break the security policy</li><li>determined by its role in the system</li></ul></li><li>A component is trustworthy means that <ul><li>the component deserves to be trusted</li><li>e.g., it is implemented correctly</li><li>determined by intrinsic properties of the component</li></ul></li></ul><h2 id="integrity-vs-confidentiality" tabindex="-1"><a class="header-anchor" href="#integrity-vs-confidentiality" aria-hidden="true">#</a> Integrity vs. Confidentiality</h2><table><thead><tr><th style="text-align:center;">Confidentiality</th><th style="text-align:center;">Intergrity</th></tr></thead><tbody><tr><td style="text-align:center;">Control reading: preserved if confidential info is not read</td><td style="text-align:center;">Control writing: preserved if important obj is not changed</td></tr><tr><td style="text-align:center;">For subjects who need to read, control writing after reading is sufficient, no need to trust them</td><td style="text-align:center;">For subjects who need to write, has to trust them, control reading before writing is <strong>not</strong> sufficient</td></tr></tbody></table><p>Integrity requires trust in subjects!</p><h2 id="analogy" tabindex="-1"><a class="header-anchor" href="#analogy" aria-hidden="true">#</a> Analogy</h2><ul><li>Confidentiality violation: leak a secret <ul><li>CAN be prevented even if I tell the secret to a person I do not trust, so long as I can lock the person up AFTERWARDS to prevent further leakage</li></ul></li><li>Integrity violation: follow a wrong instruction <ul><li>CANNOT be prevented if I follow instruction from an person I do not trust even if I lock the person up BEFOREHAND to prevent the person from receiving any malicious instruction <ul><li>The person can invent malicious instruction without outside input</li></ul></li></ul></li></ul><h2 id="key-difference-between-confidentiality-and-integrity" tabindex="-1"><a class="header-anchor" href="#key-difference-between-confidentiality-and-integrity" aria-hidden="true">#</a> Key Difference between Confidentiality and Integrity</h2><ul><li>For confidentiality, controlling reading &amp; writing is sufficient <ul><li>theoretically, no subject needs to be trusted for confidentiality; however, one does need trusted subjects in BLP to make system realistic</li></ul></li><li>For integrity, controlling reading and writing is insufficient <ul><li>one has to trust all subjects who can write to critical data</li></ul></li></ul><h2 id="impacts-of-the-need-to-trust-subjects" tabindex="-1"><a class="header-anchor" href="#impacts-of-the-need-to-trust-subjects" aria-hidden="true">#</a> Impacts of The Need to Trust Subjects</h2><ul><li>Trusting only a small security kernel is no longer possible</li><li>No need to worry about covert channels for integrity protection</li><li>How to establish trust in subjects becomes a challenge.</li></ul><h2 id="application-of-integrity-protection" tabindex="-1"><a class="header-anchor" href="#application-of-integrity-protection" aria-hidden="true">#</a> Application of Integrity Protection</h2><ul><li>Mandatory Integrity Control in Windows (since Vista) <ul><li>Uses four integrity levels: Low, Medium, High, and System</li><li>Each process is assigned a level, which limit resources it can access</li><li>Processes started by normal users have Medium</li><li>Elevated processes have High</li></ul></li><li>Through the User Account Control feature <ul><li>Some processes run as Low, such as IE in protected mode</li><li>Reading and writing do not change the integrity level <ul><li>Ring policy.</li></ul></li></ul></li></ul><h2 id="the-clark-wilson-model" tabindex="-1"><a class="header-anchor" href="#the-clark-wilson-model" aria-hidden="true">#</a> The Clark-Wilson Model</h2><ul><li>David D. Clark and David R. Wilson. “A Comparison of Commercial and Military Computer Security Policies.” In IEEE SSP 1987. <ul><li>Military policies focus on preventing disclosure</li><li>In commercial environment, integrity is paramount</li></ul></li><li>no user of the system, even if authorized, may be permitted to modify data items in such a way that assets or accounting records of the company are lost or corrupted</li></ul><h2 id="two-high-level-mechanisms-for-enforcing-data-integrity" tabindex="-1"><a class="header-anchor" href="#two-high-level-mechanisms-for-enforcing-data-integrity" aria-hidden="true">#</a> Two High-level Mechanisms for Enforcing Data Integrity</h2><ul><li><strong>Well-formed</strong> transaction <ul><li>a user should not manipulate data arbitrarily, but only in constrained ways that preserve or ensure data integrity <ul><li>e.g., use an append-only log to record all transactions</li><li>e.g., double-entry bookkeeping</li><li>e.g., passwd</li></ul></li><li><strong>Can manipulate data only through trusted code!</strong></li></ul></li><li><strong>Separation of duty</strong><ul><li>ensure external consistency: data objects correspond to the real world objects</li><li>separating all operations into several subparts and requiring that each subpart be executed by a different person</li><li>e.g., the two-man rule</li></ul></li></ul><h2 id="implementing-the-two-high-level-mechanisms" tabindex="-1"><a class="header-anchor" href="#implementing-the-two-high-level-mechanisms" aria-hidden="true">#</a> Implementing the Two High-level Mechanisms</h2><ul><li>Mechanisms are needed to ensure <ul><li><strong>control access to data</strong>: a data item can be manipulated only by a specific set of programs</li><li><strong>program certification</strong>: programs must be inspected for proper construction, controls must be provided on the ability to install and modify these programs</li><li><strong>control access to programs</strong>: each user must be permitted to use only certain sets of programs</li><li><strong>control administration</strong>: assignment of people to programs must be controlled and inspected</li></ul></li></ul><h2 id="the-clarke-wilson-model-for-integrity" tabindex="-1"><a class="header-anchor" href="#the-clarke-wilson-model-for-integrity" aria-hidden="true">#</a> The Clarke-Wilson Model for Integrity</h2><ul><li>Unconstrained Data Items (UDIs) <ul><li>data with low integrity</li></ul></li><li>Constrained Data Items (CDIs) <ul><li>data items within the system to which the integrity model must apply</li></ul></li><li>Integrity Verification Procedures (IVPs) <ul><li>confirm that all of the CDIs in the system conform to the integrity specification</li></ul></li><li>Transformation Procedures (TPs) <ul><li>well-formed transactions</li></ul></li></ul><h2 id="differences-from-mac-blp" tabindex="-1"><a class="header-anchor" href="#differences-from-mac-blp" aria-hidden="true">#</a> Differences from MAC/BLP</h2><ul><li>A data item is not associated with a particular security level, but rather with a set of TPs</li><li>A user is not given read/write access to data items, but rather permissions to execute certain programs</li></ul><h2 id="comparison-with-biba" tabindex="-1"><a class="header-anchor" href="#comparison-with-biba" aria-hidden="true">#</a> Comparison with Biba</h2><ul><li>Biba lacks the procedures and requirements on identifying subjects as trusted</li><li>Clark-Wilson focuses on how to ensure that programs can be trusted</li></ul><h2 id="the-chinese-wall-security-policy" tabindex="-1"><a class="header-anchor" href="#the-chinese-wall-security-policy" aria-hidden="true">#</a> The Chinese Wall Security Policy</h2><ul><li>Goal: <strong>Avoid Conflict of Interest</strong></li><li>Data are stored in a hierarchical arranged system <ul><li>the lowest level consists of individual data items</li><li>the intermediate level group data items into company data sets</li><li>the highest level group company datasets whose corporation are in competition</li></ul></li></ul><p><img src="'+p+'" alt="fig01_chineseWall"></p><h2 id="simple-security-rule-in-chinese-wall-policy" tabindex="-1"><a class="header-anchor" href="#simple-security-rule-in-chinese-wall-policy" aria-hidden="true">#</a> Simple Security Rule in Chinese Wall Policy</h2><ul><li>Access is only granted if the object requested: <ul><li>is in the same company dataset as an object already accessed by that subject, i.e., within the Wall, or</li><li>belongs to an entirely different conflict of interest class.</li></ul></li></ul>',34);function oe(re,ce){const n=d("mi"),s=d("mo"),o=d("mrow"),r=d("annotation"),c=d("semantics"),u=d("math");return m(),f("div",null,[y,l("ul",null,[l("li",null,[t("Rules: "),l("ul",null,[l("li",null,[t("s can read o iff "),l("span",g,[l("span",b,[e(u,null,{default:a(()=>[e(c,null,{default:a(()=>[e(o,null,{default:a(()=>[e(n,null,{default:a(()=>[t("i")]),_:1}),e(s,null,{default:a(()=>[t("(")]),_:1}),e(n,null,{default:a(()=>[t("s")]),_:1}),e(s,null,{default:a(()=>[t(")")]),_:1}),e(s,null,{default:a(()=>[t("≤")]),_:1}),e(n,null,{default:a(()=>[t("i")]),_:1}),e(s,null,{default:a(()=>[t("(")]),_:1}),e(n,null,{default:a(()=>[t("o")]),_:1}),e(s,null,{default:a(()=>[t(")")]),_:1})]),_:1}),e(r,{encoding:"application/x-tex"},{default:a(()=>[t("i(s) \\leq i(o)")]),_:1})]),_:1})]),_:1})]),w]),v]),l("li",null,[t("s can write to o iff "),l("span",x,[l("span",k,[e(u,null,{default:a(()=>[e(c,null,{default:a(()=>[e(o,null,{default:a(()=>[e(n,null,{default:a(()=>[t("i")]),_:1}),e(s,null,{default:a(()=>[t("(")]),_:1}),e(n,null,{default:a(()=>[t("s")]),_:1}),e(s,null,{default:a(()=>[t(")")]),_:1}),e(s,null,{default:a(()=>[t("≥")]),_:1}),e(n,null,{default:a(()=>[t("i")]),_:1}),e(s,null,{default:a(()=>[t("(")]),_:1}),e(n,null,{default:a(()=>[t("o")]),_:1}),e(s,null,{default:a(()=>[t(")")]),_:1})]),_:1}),e(r,{encoding:"application/x-tex"},{default:a(()=>[t("i(s) \\geq i(o)")]),_:1})]),_:1})]),_:1})]),j]),I])])])]),C,l("ul",null,[l("li",null,[t("Rules: "),l("ul",null,[l("li",null,[t("s can always read o; after reading "),l("span",P,[l("span",S,[e(u,null,{default:a(()=>[e(c,null,{default:a(()=>[e(o,null,{default:a(()=>[e(n,null,{default:a(()=>[t("i")]),_:1}),e(s,null,{default:a(()=>[t("(")]),_:1}),e(n,null,{default:a(()=>[t("s")]),_:1}),e(s,null,{default:a(()=>[t(")")]),_:1}),e(s,null,{default:a(()=>[t("←")]),_:1}),e(n,null,{default:a(()=>[t("min")]),_:1}),e(s,null,{default:a(()=>[t("[")]),_:1}),e(n,null,{default:a(()=>[t("i")]),_:1}),e(s,null,{default:a(()=>[t("(")]),_:1}),e(n,null,{default:a(()=>[t("s")]),_:1}),e(s,null,{default:a(()=>[t(")")]),_:1}),e(s,{separator:"true"},{default:a(()=>[t(",")]),_:1}),e(n,null,{default:a(()=>[t("i")]),_:1}),e(s,null,{default:a(()=>[t("(")]),_:1}),e(n,null,{default:a(()=>[t("o")]),_:1}),e(s,null,{default:a(()=>[t(")")]),_:1}),e(s,null,{default:a(()=>[t("]")]),_:1})]),_:1}),e(r,{encoding:"application/x-tex"},{default:a(()=>[t("i(s)\\leftarrow \\min[i(s), i(o)]")]),_:1})]),_:1})]),_:1})]),T])]),l("li",null,[t("s can write to o iff "),l("span",A,[l("span",D,[e(u,null,{default:a(()=>[e(c,null,{default:a(()=>[e(o,null,{default:a(()=>[e(n,null,{default:a(()=>[t("i")]),_:1}),e(s,null,{default:a(()=>[t("(")]),_:1}),e(n,null,{default:a(()=>[t("s")]),_:1}),e(s,null,{default:a(()=>[t(")")]),_:1}),e(s,null,{default:a(()=>[t("≥")]),_:1}),e(n,null,{default:a(()=>[t("i")]),_:1}),e(s,null,{default:a(()=>[t("(")]),_:1}),e(n,null,{default:a(()=>[t("o")]),_:1}),e(s,null,{default:a(()=>[t(")")]),_:1})]),_:1}),e(r,{encoding:"application/x-tex"},{default:a(()=>[t("i(s) \\geq i(o)")]),_:1})]),_:1})]),_:1})]),E])])])]),M,R]),W,l("ul",null,[l("li",null,[t("Rules: "),l("ul",null,[l("li",null,[t("s can read o; iff "),l("span",B,[l("span",L,[e(u,null,{default:a(()=>[e(c,null,{default:a(()=>[e(o,null,{default:a(()=>[e(n,null,{default:a(()=>[t("i")]),_:1}),e(s,null,{default:a(()=>[t("(")]),_:1}),e(n,null,{default:a(()=>[t("s")]),_:1}),e(s,null,{default:a(()=>[t(")")]),_:1}),e(s,null,{default:a(()=>[t("≤")]),_:1}),e(n,null,{default:a(()=>[t("i")]),_:1}),e(s,null,{default:a(()=>[t("(")]),_:1}),e(n,null,{default:a(()=>[t("o")]),_:1}),e(s,null,{default:a(()=>[t(")")]),_:1})]),_:1}),e(r,{encoding:"application/x-tex"},{default:a(()=>[t("i(s) \\leq i(o)")]),_:1})]),_:1})]),_:1})]),N])]),l("li",null,[t("s can always write to o; after writing "),l("span",q,[l("span",F,[e(u,null,{default:a(()=>[e(c,null,{default:a(()=>[e(o,null,{default:a(()=>[e(n,null,{default:a(()=>[t("i")]),_:1}),e(s,null,{default:a(()=>[t("(")]),_:1}),e(n,null,{default:a(()=>[t("o")]),_:1}),e(s,null,{default:a(()=>[t(")")]),_:1}),e(s,null,{default:a(()=>[t("←")]),_:1}),e(n,null,{default:a(()=>[t("min")]),_:1}),e(s,null,{default:a(()=>[t("[")]),_:1}),e(n,null,{default:a(()=>[t("i")]),_:1}),e(s,null,{default:a(()=>[t("(")]),_:1}),e(n,null,{default:a(()=>[t("s")]),_:1}),e(s,null,{default:a(()=>[t(")")]),_:1}),e(s,{separator:"true"},{default:a(()=>[t(",")]),_:1}),e(n,null,{default:a(()=>[t("i")]),_:1}),e(s,null,{default:a(()=>[t("(")]),_:1}),e(n,null,{default:a(()=>[t("o")]),_:1}),e(s,null,{default:a(()=>[t(")")]),_:1}),e(s,null,{default:a(()=>[t("]")]),_:1})]),_:1}),e(r,{encoding:"application/x-tex"},{default:a(()=>[t("i(o)\\leftarrow \\min[i(s), i(o)]")]),_:1})]),_:1})]),_:1})]),H])])])]),O,V]),U,l("ul",null,[l("li",null,[t("Rules: "),l("ul",null,[l("li",null,[t("s can always read o; after reading "),l("span",z,[l("span",J,[e(u,null,{default:a(()=>[e(c,null,{default:a(()=>[e(o,null,{default:a(()=>[e(n,null,{default:a(()=>[t("i")]),_:1}),e(s,null,{default:a(()=>[t("(")]),_:1}),e(n,null,{default:a(()=>[t("s")]),_:1}),e(s,null,{default:a(()=>[t(")")]),_:1}),e(s,null,{default:a(()=>[t("←")]),_:1}),e(n,null,{default:a(()=>[t("min")]),_:1}),e(s,null,{default:a(()=>[t("[")]),_:1}),e(n,null,{default:a(()=>[t("i")]),_:1}),e(s,null,{default:a(()=>[t("(")]),_:1}),e(n,null,{default:a(()=>[t("s")]),_:1}),e(s,null,{default:a(()=>[t(")")]),_:1}),e(s,{separator:"true"},{default:a(()=>[t(",")]),_:1}),e(n,null,{default:a(()=>[t("i")]),_:1}),e(s,null,{default:a(()=>[t("(")]),_:1}),e(n,null,{default:a(()=>[t("o")]),_:1}),e(s,null,{default:a(()=>[t(")")]),_:1}),e(s,null,{default:a(()=>[t("]")]),_:1})]),_:1}),e(r,{encoding:"application/x-tex"},{default:a(()=>[t("i(s)\\leftarrow \\min[i(s), i(o)]")]),_:1})]),_:1})]),_:1})]),K])]),l("li",null,[t("s can always write to o; after writing "),l("span",G,[l("span",Q,[e(u,null,{default:a(()=>[e(c,null,{default:a(()=>[e(o,null,{default:a(()=>[e(n,null,{default:a(()=>[t("i")]),_:1}),e(s,null,{default:a(()=>[t("(")]),_:1}),e(n,null,{default:a(()=>[t("o")]),_:1}),e(s,null,{default:a(()=>[t(")")]),_:1}),e(s,null,{default:a(()=>[t("←")]),_:1}),e(n,null,{default:a(()=>[t("min")]),_:1}),e(s,null,{default:a(()=>[t("[")]),_:1}),e(n,null,{default:a(()=>[t("i")]),_:1}),e(s,null,{default:a(()=>[t("(")]),_:1}),e(n,null,{default:a(()=>[t("s")]),_:1}),e(s,null,{default:a(()=>[t(")")]),_:1}),e(s,{separator:"true"},{default:a(()=>[t(",")]),_:1}),e(n,null,{default:a(()=>[t("i")]),_:1}),e(s,null,{default:a(()=>[t("(")]),_:1}),e(n,null,{default:a(()=>[t("o")]),_:1}),e(s,null,{default:a(()=>[t(")")]),_:1}),e(s,null,{default:a(()=>[t("]")]),_:1})]),_:1}),e(r,{encoding:"application/x-tex"},{default:a(()=>[t("i(o)\\leftarrow \\min[i(s), i(o)]")]),_:1})]),_:1})]),_:1})]),X])])])]),Y,Z]),$,l("ul",null,[l("li",null,[t("Rules "),l("ul",null,[ee,l("li",null,[t("s can write to o iff "),l("span",ae,[l("span",te,[e(u,null,{default:a(()=>[e(c,null,{default:a(()=>[e(o,null,{default:a(()=>[e(n,null,{default:a(()=>[t("i")]),_:1}),e(s,null,{default:a(()=>[t("(")]),_:1}),e(n,null,{default:a(()=>[t("s")]),_:1}),e(s,null,{default:a(()=>[t(")")]),_:1}),e(s,null,{default:a(()=>[t("≥")]),_:1}),e(n,null,{default:a(()=>[t("i")]),_:1}),e(s,null,{default:a(()=>[t("(")]),_:1}),e(n,null,{default:a(()=>[t("o")]),_:1}),e(s,null,{default:a(()=>[t(")")]),_:1})]),_:1}),e(r,{encoding:"application/x-tex"},{default:a(()=>[t("i(s) \\geq i(o)")]),_:1})]),_:1})]),_:1})]),le])])])]),se,ne]),ie])}const pe=h(_,[["render",oe],["__file","s19.html.vue"]]);export{pe as default};
