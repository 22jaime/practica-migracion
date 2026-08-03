const fs = require('fs');
const files=[
'app/opiniones/page.tsx',
'app/formularios/page.tsx',
'app/legalizacion-documentos-espanoles-cuba/components/ProcessExplanationEspana.tsx',
'app/legalizacion-documentos-cubanos-espana-minjus-consulado/components/ProcessExplanation.tsx',
'app/envio-de-documentos-cuba-espana/components/ShippingHowItWorks.tsx',
'app/envio-de-documentos-cuba-espana/components/ShippingHero.tsx',
];

files.forEach(f => {
  let text = fs.readFileSync(f, 'utf8');
  // Remove import Image from "next/image"
  text = text.replace(/import Image from ['"]next\/image['"];?\r?\n/g, '');
  
  // Replace <Image with <img
  text = text.replace(/<Image/g, '<img');
  
  // Remove `fill` property because it causes errors on native <img> tags
  // Replace it with style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }}
  text = text.replace(/fill/g, `style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }}`);

  // Remove `priority` (can cause warnings on standard img occasionally if no bool passed). We'll safely remove it.
  text = text.replace(/\s+priority/g, '');
  text = text.replace(/\s+unoptimized/g, '');
  
  fs.writeFileSync(f, text);
});
console.log('Replaced successfully!');
