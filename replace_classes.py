import re

def update_classes(content):
    # Colors
    content = content.replace('bg-slate-950', 'bg-zinc-950')
    content = content.replace('bg-slate-900', 'bg-zinc-900/80')
    content = content.replace('bg-slate-800', 'bg-zinc-800/60')
    content = content.replace('border-slate-800', 'border-zinc-800/80')
    content = content.replace('border-slate-700', 'border-zinc-700')
    content = content.replace('text-slate-100', 'text-zinc-100')
    content = content.replace('text-slate-200', 'text-zinc-200')
    content = content.replace('text-slate-300', 'text-zinc-300')
    content = content.replace('text-slate-400', 'text-zinc-400')
    content = content.replace('text-slate-50', 'text-white')
    
    # Primary accent (cyan -> fuchsia)
    content = content.replace('cyan-400', 'fuchsia-400')
    content = content.replace('cyan-300', 'fuchsia-300')
    content = content.replace('cyan-200', 'fuchsia-200')
    content = content.replace('cyan-100', 'fuchsia-100')
    content = content.replace('cyan-950', 'fuchsia-950')
    content = content.replace('cyan-500', 'fuchsia-500')
    
    # Secondary accent (amber -> violet)
    content = content.replace('amber-400', 'violet-400')
    content = content.replace('amber-300', 'violet-300')
    content = content.replace('amber-200', 'violet-200')
    
    # Body background radial gradient
    content = content.replace(
        'bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_30%),linear-gradient(180deg,_#020617_0%,_#08111f_100%)]',
        'bg-transparent' # I already set the background in globals.css
    )
    
    return content

with open('app/page.tsx', 'r') as f:
    data = f.read()

# Only replace from return statement onwards to avoid breaking logic (except we also want to update the classes at the top but I did that manually)
start_idx = data.find('  return (')
if start_idx != -1:
    header = data[:start_idx]
    footer = data[start_idx:]
    footer = update_classes(footer)
    with open('app/page.tsx', 'w') as f:
        f.write(header + footer)
    print("Successfully updated classes in page.tsx")
else:
    print("Could not find return statement")
