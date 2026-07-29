const fs = require('fs');

function updateClasses(content) {
    // Colors
    content = content.replace(/bg-slate-950/g, 'bg-zinc-950');
    content = content.replace(/bg-slate-900/g, 'bg-zinc-900/80');
    content = content.replace(/bg-slate-800/g, 'bg-zinc-800/60');
    content = content.replace(/border-slate-800/g, 'border-zinc-800/80');
    content = content.replace(/border-slate-700/g, 'border-zinc-700');
    content = content.replace(/text-slate-100/g, 'text-zinc-100');
    content = content.replace(/text-slate-200/g, 'text-zinc-200');
    content = content.replace(/text-slate-300/g, 'text-zinc-300');
    content = content.replace(/text-slate-400/g, 'text-zinc-400');
    content = content.replace(/text-slate-50/g, 'text-white');
    
    // Primary accent (cyan -> fuchsia)
    content = content.replace(/cyan-400/g, 'fuchsia-400');
    content = content.replace(/cyan-300/g, 'fuchsia-300');
    content = content.replace(/cyan-200/g, 'fuchsia-200');
    content = content.replace(/cyan-100/g, 'fuchsia-100');
    content = content.replace(/cyan-950/g, 'fuchsia-950');
    content = content.replace(/cyan-500/g, 'fuchsia-500');
    
    // Secondary accent (amber -> violet)
    content = content.replace(/amber-400/g, 'violet-400');
    content = content.replace(/amber-300/g, 'violet-300');
    content = content.replace(/amber-200/g, 'violet-200');
    
    // Body background radial gradient
    content = content.replace(
        /bg-\[radial-gradient\(circle_at_top,_rgba\(34,211,238,0\.18\),_transparent_30%\),linear-gradient\(180deg,_#020617_0%,_#08111f_100%\)\]/g,
        'bg-transparent' // I already set the background in globals.css
    );
    
    return content;
}

const data = fs.readFileSync('app/page.tsx', 'utf8');
const startIdx = data.indexOf('  return (');

if (startIdx !== -1) {
    const header = data.substring(0, startIdx);
    let footer = data.substring(startIdx);
    footer = updateClasses(footer);
    fs.writeFileSync('app/page.tsx', header + footer);
    console.log("Successfully updated classes in page.tsx");
} else {
    console.log("Could not find return statement");
}
