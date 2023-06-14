import{_ as e,a as i,b as s,c as l,d as t,e as a,f as r,g as o}from"./fig08_logging_in-88586399.js";import{_ as n,o as c,c as d,e as h}from"./app-eef777f9.js";const u={},p=h('<h1 id="operating-systems-security-basics-unix-access-control" tabindex="-1"><a class="header-anchor" href="#operating-systems-security-basics-unix-access-control" aria-hidden="true">#</a> Operating Systems Security Basics &amp; Unix Access Control</h1><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Operating Systems Security Basics (from slide01 to slide15) is omitted.</p></div><h2 id="access-control" tabindex="-1"><a class="header-anchor" href="#access-control" aria-hidden="true">#</a> Access control</h2><ul><li>A <strong>reference monitor mediates</strong> all access to resources <ul><li><strong>Principle: Complete mediation</strong>: control <strong>all</strong> accesses to resources</li></ul></li></ul><p><img src="'+e+'" alt="access_control"></p><h2 id="access-matrix-model" tabindex="-1"><a class="header-anchor" href="#access-matrix-model" aria-hidden="true">#</a> ACCESS MATRIX MODEL</h2><p><img src="'+i+'" alt="access_matrix_model"></p><ul><li>Basic Abstractions <ul><li>Subjects</li><li>Objects</li><li>Rights</li></ul></li><li>The rights in a cell specify the access of the subject (row) to the object (column)</li></ul><h3 id="principals-and-subjects" tabindex="-1"><a class="header-anchor" href="#principals-and-subjects" aria-hidden="true">#</a> PRINCIPALS AND SUBJECTS</h3><ul><li>A subject is a program (application) executing on behalf of some principal(s)</li><li>A principal may at any time be idle, or have one or more subjects executing on its behalf</li></ul><p><em>What are subjects in UNIX?</em></p><p><em>What are principals in UNIX?</em></p><h3 id="objects" tabindex="-1"><a class="header-anchor" href="#objects" aria-hidden="true">#</a> OBJECTS</h3><ul><li>An object is anything on which a subject can perform operations (mediated by rights)</li><li>Usually objects are passive, for example: <ul><li>File</li><li>Directory (or Folder)</li><li>Memory segment</li></ul></li><li>But, subjects (i.e. processes) can also be objects, with operations performed on them <ul><li>kill, suspend, resume, send interprocess communication, etc.</li></ul></li></ul><h2 id="basic-concepts-of-unix-access-control-users-groups-files-processes" tabindex="-1"><a class="header-anchor" href="#basic-concepts-of-unix-access-control-users-groups-files-processes" aria-hidden="true">#</a> Basic Concepts of UNIX Access Control: Users, Groups, Files, Processes</h2><ul><li>Each user account has a unique UID <ul><li>The UID 0 means the super user (system admin)</li></ul></li><li>A user account belongs to multiple groups</li><li>Subjects are processes <ul><li>associated with uid/gid pairs, e.g., (euid, egid), (ruid, rgid), (suid, sgid)</li></ul></li><li>Objects are files</li></ul><h3 id="users-and-principals" tabindex="-1"><a class="header-anchor" href="#users-and-principals" aria-hidden="true">#</a> USERS AND PRINCIPALS</h3><p><img src="'+s+'" alt="user_and_principals"></p><p>The system authenticates the human user to a particular principal.</p><ul><li>There should be a one-to-many mapping from users to principals <ul><li>a user may have many principals, but</li><li>each principal is associated with an unique user</li></ul></li><li>This ensures accountability of a user&#39;s actions</li></ul><p><em>What does the above imply in UNIX?</em></p><h3 id="organization-of-objects" tabindex="-1"><a class="header-anchor" href="#organization-of-objects" aria-hidden="true">#</a> Organization of Objects</h3><ul><li>In UNIX, almost all objects are modeled as files <ul><li>Files are arranged in a hierarchy</li><li>Files exist in directories</li><li>Directories are also one kind of files</li></ul></li><li>Each object has <ul><li>owner</li><li>group</li><li>12 permission bits</li><li>rwx for owner, rwx for group, and rwx for others</li><li>suid, sgid, sticky</li></ul></li></ul><h3 id="unix-inodes" tabindex="-1"><a class="header-anchor" href="#unix-inodes" aria-hidden="true">#</a> UNIX inodes</h3><p>Each file corresponds to an inode</p><p><img src="'+l+'" alt="UNIX_inodes"></p><h3 id="unix-directories" tabindex="-1"><a class="header-anchor" href="#unix-directories" aria-hidden="true">#</a> UNIX Directories</h3><p><img src="'+t+'" alt="UNIX_dirs"></p><h3 id="basic-permissions-bits-on-files-non-directories" tabindex="-1"><a class="header-anchor" href="#basic-permissions-bits-on-files-non-directories" aria-hidden="true">#</a> Basic Permissions Bits on Files (Non-directories)</h3><ul><li><p>Read controls reading the content of a file</p><ul><li>i.e., the read system call</li></ul></li><li><p>Write controls changing the content of a file</p><ul><li>i.e., the write system call</li></ul></li><li><p>Execute controls loading the file in memory and execute</p><ul><li>i.e., the execve system call</li></ul></li></ul><h3 id="execution-of-a-file" tabindex="-1"><a class="header-anchor" href="#execution-of-a-file" aria-hidden="true">#</a> Execution of a file</h3><ul><li>Binary file vs. script file</li><li>Having execute but not read, can one run a binary file? <ul><li>Yes.</li></ul></li><li>Having execute but not read, can one run a script file? <ul><li>No.</li></ul></li><li>Having read but not execute, can one run a script file? <ul><li>Yes, by invoking the interpreter</li></ul></li></ul><h3 id="permission-bits-on-directories" tabindex="-1"><a class="header-anchor" href="#permission-bits-on-directories" aria-hidden="true">#</a> Permission Bits on Directories</h3><ul><li>Read bit allows one to show file names in a directory</li><li>The execution bit controls traversing a directory <ul><li>does a lookup, allows one to find inode # from file name</li><li>chdir to a directory requires execution</li></ul></li><li>Write + execution control creating/deleting files in the directory <ul><li>Deleting a file under a directory requires no permission on the file</li></ul></li><li>Accessing a file identified by a path name requires execution to all directories along the path</li></ul><h3 id="the-suid-sgid-sticky-bits" tabindex="-1"><a class="header-anchor" href="#the-suid-sgid-sticky-bits" aria-hidden="true">#</a> The suid, sgid, sticky bits</h3><p><img src="'+a+'" alt="suid_sgid_sticky_bits"></p><h3 id="some-examples" tabindex="-1"><a class="header-anchor" href="#some-examples" aria-hidden="true">#</a> Some Examples</h3><ul><li>What permissions are needed to access a file/directory? <ul><li>read a file: <code>/d1/d2/f3</code></li><li>write a file: <code>/d1/d2/f3</code></li><li>delete a file: <code>/d1/d2/f3</code></li><li>rename a file: from <code>/d1/d2/f3</code> to <code>/d1/d2/f4</code> …</li></ul></li><li>File/Directory Access Control is by System Calls <ul><li>e.g., open(2), stat(2), read(2), write(2), chmod(2), opendir(2), readdir(2), readlink(2), chdir(2), …</li></ul></li></ul><h3 id="the-three-sets-of-permission-bits" tabindex="-1"><a class="header-anchor" href="#the-three-sets-of-permission-bits" aria-hidden="true">#</a> The Three Sets of Permission Bits</h3><ul><li>Intuition: <ul><li>if the user is the owner of a file, then the r/w/x bits for owner apply</li><li>otherwise, if the user belongs to the group the file belongs to, then the r/w/x bits for group apply</li><li>otherwise, the r/w/x bits for others apply</li></ul></li></ul><details class="custom-container details"><p><em>Can one implement negative authorization, i.e., only members of a particular group are not allowed to access a file?</em></p></details><h3 id="other-issues-on-objects-in-unix" tabindex="-1"><a class="header-anchor" href="#other-issues-on-objects-in-unix" aria-hidden="true">#</a> Other Issues On Objects in UNIX</h3><ul><li>Accesses other than read/write/execute <ul><li>Who can change the permission bits? <ul><li>The owner can</li></ul></li><li>Who can change the owner? <ul><li>Only the superuser</li></ul></li></ul></li><li>Rights not related to a file <ul><li>Affecting another process</li><li>Operations such as shutting down the system, mounting a new file system, listening on a low port <ul><li>traditionally reserved for the root user</li></ul></li></ul></li></ul><h2 id="security-principles-related-to-access-control" tabindex="-1"><a class="header-anchor" href="#security-principles-related-to-access-control" aria-hidden="true">#</a> Security Principles Related to Access Control</h2><ul><li>Psychological acceptability is related to configuring access control policies.</li><li>Fail-safe defaults</li><li>Least privilege</li><li>Complete mediation</li></ul><h3 id="principle-of-fail-safe-defaults" tabindex="-1"><a class="header-anchor" href="#principle-of-fail-safe-defaults" aria-hidden="true">#</a> Principle of Fail-safe defaults</h3><ul><li>Base access decisions on permission rather than exclusion. This principle[...] means that the default situation is lack of access, and the protection scheme identifies conditions under which access is permitted. The alternative, in which mechanisms attempt to identify conditions under which access should be refused, presents the wrong psychological base for secure system design. A conservative design must be based on arguments why objects should be accessible, rather than why they should not.</li><li>E.g., whitelisting instead of black listing.</li></ul><details class="custom-container details"><p>In a large system some objects will be inadequately considered, so a default of lack of permission is safer. A design or implementation mistake in a mechanism that gives explicit permission tends to fail by refusing permission, a safe situation, since it will be quickly detected. On the other hand, a design or implementation mistake in a mechanism that explicitly excludes access tends to fail by allowing access, a failure which may go unnoticed in normal use. This principle applies both to the outward appearance of the protection mechanism and to its underlying implementation.</p></details><h3 id="principle-of-least-privilege" tabindex="-1"><a class="header-anchor" href="#principle-of-least-privilege" aria-hidden="true">#</a> Principle of Least Privilege</h3><ul><li>Every program and every user of the system should operate using the least set of privileges necessary to complete the job. Primarily, this principle limits the damage that can result from an accident or error. It also reduces the number of potential interactions among privileged programs to the minimum for correct operation, so that unintentional, unwanted, or improper uses of privilege are less likely to occur. [...] The military security rule of &quot;need-to-know&quot; is an example of this principle.</li></ul><h3 id="principle-of-complete-mediation" tabindex="-1"><a class="header-anchor" href="#principle-of-complete-mediation" aria-hidden="true">#</a> Principle of Complete mediation</h3><ul><li>Every access to every object must be checked for authority. This principle, when systematically applied, is the primary underpinning of the protection system. It forces a system-wide view of access control, which in addition to normal operation includes initialization, recovery, shutdown, and maintenance. It implies that a foolproof method of identifying the source of every request must be devised. It also requires that proposals to gain performance by remembering the result of an authority check be examined skeptically. If a change in authority occurs, such remembered results must be systematically updated.</li></ul><h2 id="subjects-vs-principals" tabindex="-1"><a class="header-anchor" href="#subjects-vs-principals" aria-hidden="true">#</a> Subjects vs. Principals</h2><ul><li>Access rights are specified for user accounts (principals).</li><li>Accesses are performed by processes (subjects)</li><li>The OS needs to know on which user accounts’ behalf a process is executing</li><li><em>How is this done in Unix?</em></li></ul><h2 id="process-user-id-model-in-modern-unix-systems" tabindex="-1"><a class="header-anchor" href="#process-user-id-model-in-modern-unix-systems" aria-hidden="true">#</a> Process User ID Model in Modern UNIX Systems</h2><ul><li>Each process has three user IDs <ul><li>real user ID (ruid) owner of the process</li><li>effective user ID (euid) used in most access control decisions</li><li>saved user ID (suid)</li></ul></li><li>and three group IDs <ul><li>real group ID</li><li>effective group ID</li><li>saved group ID</li></ul></li><li>When a process is created by fork <ul><li>it inherits all three users IDs from its parent process</li></ul></li><li>When a process executes a file by exec <ul><li>it keeps its three user IDs unless the set-user-ID bit of the file is set, in which case the effective uid and saved uid are assigned the user ID of the owner of the file</li></ul></li><li>A process may change the user ids via system calls</li></ul><h3 id="the-need-for-suid-sgid-bits" tabindex="-1"><a class="header-anchor" href="#the-need-for-suid-sgid-bits" aria-hidden="true">#</a> The Need for suid/sgid Bits</h3><ul><li>Some operations are not modeled as files and require user id = 0 <ul><li>halting the system</li><li>bind/listen on “privileged ports” (TCP/UDP ports below 1024)</li><li>non-root users need these privileges</li></ul></li><li>File level access control is not fine-grained enough</li><li>System integrity requires more than controlling who can write, but also how it is written</li></ul><h3 id="security-problems-of-programs-with-suid-sgid" tabindex="-1"><a class="header-anchor" href="#security-problems-of-programs-with-suid-sgid" aria-hidden="true">#</a> Security Problems of Programs with suid/sgid</h3><ul><li>These programs are typically setuid root</li><li>Violates the least privilege principle <ul><li>every program and every user should operate using the least privilege necessary to complete the job</li></ul></li><li>Why violating least privilege is bad?</li><li>How would an attacker exploit this problem?</li><li>How to solve this problem?</li></ul><h4 id="changing-effective-user-ids" tabindex="-1"><a class="header-anchor" href="#changing-effective-user-ids" aria-hidden="true">#</a> Changing effective user IDs</h4><ul><li>A process that executes a set-uid program can drop its privilege; it can <ul><li>drop privilege permanently <ul><li>removes the privileged user id from all three user IDs</li></ul></li><li>drop privilege temporarily <ul><li>removes the privileged user ID from its effective uid but stores it in its saved uid, later the process may restore privilege by restoring privileged user ID in its effective uid</li></ul></li></ul></li></ul><h4 id="what-happens-during-logging-in" tabindex="-1"><a class="header-anchor" href="#what-happens-during-logging-in" aria-hidden="true">#</a> What Happens during Logging in</h4><p><img src="'+r+'" alt="logging_in"></p><ul><li><p>After the login process verifies that the entered password is correct, it issues a setuid system call.</p></li><li><p>The login process then loads the shell, giving the user a login shell.</p></li><li><p>The user types in the passwd command to change his password.</p></li></ul><p><img src="'+o+'" alt="logging_in_2"></p><ul><li>The fork call creates a new process, which loads “passwd”, which is owned by root user, and has setuid bit set.</li></ul><h2 id="mechanism-versus-policy" tabindex="-1"><a class="header-anchor" href="#mechanism-versus-policy" aria-hidden="true">#</a> Mechanism versus Policy</h2><ul><li>“Separation of mechanism and policy” as a design principle <ul><li>Roughly, implements a mechanism that is flexible and can be configured to support different policies, instead of hardcoding the policy in the implementation.</li><li>Delay decisions as much as possible, leave decisions to users</li></ul></li><li>Examples: <ul><li>“Mechanism, not policy” made explicit initially by the designers of X windowing system <ul><li>X provide primitives, and Interface and look-and-feel up to application level</li></ul></li><li>UNIX’s philosophy in general, simple flexible tools</li><li>Linux security module as another example</li></ul></li></ul><h3 id="case-against-mechanism-no-policy" tabindex="-1"><a class="header-anchor" href="#case-against-mechanism-no-policy" aria-hidden="true">#</a> Case Against “Mechanism, no Policy”</h3><ul><li>Eric Steven Raymond in The Art of Unix Programming, the “What Unix Gets Wrong” section <ul><li>“But the cost of the mechanism-not-policy approach is that when the user can set policy, the user must set policy. Nontechnical end-users frequently find Unix&#39;s profusion of options and interface styles overwhelming and retreat to systems that at least pretend to offer them simplicity.”</li><li>“In the short term, Unix&#39;s laissez-faire approach may lose it a good many nontechnical users. In the long term, however, it may turn out that this ‘mistake’ confers a critical advantage — because policy tends to have a short lifetime, mechanism a long one.  So the flip side of the flip side is that the “mechanism, not policy” philosophy may enable Unix to renew its relevance long after competitors more tied to one set of policy or interface choices have faded from view.”</li></ul></li></ul><details class="custom-container details"><p>So the flip side of the flip side is that the “mechanism, not policy” philosophy may enable Unix to renew its relevance long after competitors more tied to one set of policy or interface choices have faded from view</p></details><h3 id="case-against-mechanism-no-policy-my-view" tabindex="-1"><a class="header-anchor" href="#case-against-mechanism-no-policy-my-view" aria-hidden="true">#</a> Case Against “Mechanism, no Policy”, My View</h3><ul><li>Especially problematic for security. <ul><li>“A security mechanism that is very flexible and can be extensively configured is not just overwhelming for end users, it is also highly error-prone. While there are right ways to configure the mechanism to enforce some desirable security policies, there are often many more incorrect ways to configure a system. And the complexity often overwhelms users so that the mechanism is simply not enabled. […] While a mechanism is absolutely necessary for implementing a protection system, having only a low-level mechanism is not enough.”</li><li>In Li et al. “Usable Mandatory Integrity Protection for Operating Systems”, IEEE SSP 2007.</li></ul></li></ul><p>For security, needs to provide right tradeoff of flexibility versus rigitity.</p><h3 id="a-case-study-of-mechanism-vs-policy-in-unix-access-control" tabindex="-1"><a class="header-anchor" href="#a-case-study-of-mechanism-vs-policy-in-unix-access-control" aria-hidden="true">#</a> A Case Study of “Mechanism vs. Policy” in UNIX Access Control</h3><ul><li>The policy: a process that executes a set-uid program can drop its privilege; it can <ul><li>drop privilege permanently</li><li>drop privilege temporarily</li></ul></li><li>The mechanism: setuid system calls</li></ul><p>“Setuid Demystified”, In USENIX Security ‘ 02</p><h2 id="access-control-in-early-unix" tabindex="-1"><a class="header-anchor" href="#access-control-in-early-unix" aria-hidden="true">#</a> Access Control in Early UNIX</h2><ul><li>A process has two user IDs: real uid and effective uid and one system call setuid</li><li>The system call setuid(id) <ul><li>when euid is 0, setuid set both the ruid and the euid to the parameter</li><li>otherwise, the setuid could only set effective uid to real uid <ul><li>Permanently drops privileges</li></ul></li></ul></li><li>A process cannot temporarily drop privilege</li></ul><details class="custom-container details"><p><em>Why need setuid program?</em></p></details><h3 id="system-v" tabindex="-1"><a class="header-anchor" href="#system-v" aria-hidden="true">#</a> System V</h3><ul><li>To enable temporarily drop privilege, added saved uid &amp; a new system call</li><li>The system call seteuid <ul><li>if euid is 0, seteuid could set euid to any user ID</li><li>otherwise, could set euid to ruid or suid <ul><li>Setting euid to ruid temp. drops privilege</li></ul></li></ul></li><li>The system call setuid is also changed <ul><li>if euid is 0, setuid functions as seteuid</li><li>otherwise, setuid sets all three user IDs to real uid</li></ul></li></ul><h3 id="bsd" tabindex="-1"><a class="header-anchor" href="#bsd" aria-hidden="true">#</a> BSD</h3><ul><li>Uses ruid &amp; euid, change the system call from setuid to setreuid <ul><li>if euid is 0, then the ruid and euid could be set to any user ID</li><li>otherwise, either the ruid or the euid could be set to value of the other one <ul><li>enables a process to swap ruid &amp; euid</li></ul></li></ul></li></ul><h2 id="modern-unix" tabindex="-1"><a class="header-anchor" href="#modern-unix" aria-hidden="true">#</a> Modern UNIX</h2><ul><li>System V &amp; BSD affect each other, both implemented setuid, seteuid, setreuid, with different semantics <ul><li>some modern UNIX introduced setresuid</li></ul></li><li>Things get messy, complicated, inconsistent, and buggy <ul><li>POSIX standard, Solaris, FreeBSD, Linux</li></ul></li></ul><h3 id="suggested-improved-api" tabindex="-1"><a class="header-anchor" href="#suggested-improved-api" aria-hidden="true">#</a> Suggested Improved API</h3><ul><li>Three method calls <ul><li>drop_priv_temp</li><li>drop_priv_perm</li><li>restore_priv</li></ul></li><li>Lessons from this? <ul><li>“Mechanism, not policy” not necessarily a good idea for security (flexibility not always a good thing)</li><li>Psychological acceptability principle <ul><li>“human interface should be designed for ease of use”</li><li>the user’s mental image of his protection goals should match the mechanism</li></ul></li></ul></li></ul>',89),m=[p];function f(g,y){return c(),d("div",null,m)}const x=n(u,[["render",f],["__file","s08.html.vue"]]);export{x as default};
