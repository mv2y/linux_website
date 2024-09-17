// التوزيعات التي سيتم عرضها في صفحة التوزيعات
const distributions = [
    { 
        name: 'Ubuntu', 
        description: 'توزيعة سهلة الاستخدام وشائعة بين المستخدمين الجدد. تقدم دعمًا جيدًا وتعتمد على واجهة مستخدم Gnome.', 
        url: 'https://ubuntu.com',
        logo: 'images/ubuntu_logo.png'
    },
    { 
        name: 'Fedora', 
        description: 'توزيعة تركز على الابتكار وتستخدم أحدث البرمجيات. تستهدف المستخدمين المحترفين.', 
        url: 'https://getfedora.org',
        logo: 'images/fedora_logo.png'
    },
    { 
        name: 'Arch Linux', 
        description: 'توزيعة قابلة للتخصيص بالكامل وتوفر التحكم الكامل في النظام. تتطلب مستوى عالٍ من المعرفة التقنية.', 
        url: 'https://archlinux.org',
        logo: 'images/arch_logo.png'
    },
    { 
        name: 'Debian', 
        description: 'توزيعة مستقرة وموثوقة تستخدم بشكل كبير في الخوادم والتطبيقات الحساسة.', 
        url: 'https://debian.org',
        logo: 'images/debian_logo.png'
    },
    { 
        name: 'Linux Mint', 
        description: 'توزيعة صديقة للمبتدئين تعتمد على Ubuntu وتقدم بيئة سطح مكتب Cinnamon سهلة الاستخدام.', 
        url: 'https://linuxmint.com',
        logo: 'images/mint_logo.png'
    },
    { 
        name: 'openSUSE', 
        description: 'توزيعة متقدمة تستهدف المطورين والمسؤولين عن الأنظمة، وتقدم أدوات قوية مثل YaST.', 
        url: 'https://opensuse.org',
        logo: 'images/opensuse_logo.png'
    }
];

// إضافة التوزيعات إلى صفحة التوزيعات
document.addEventListener('DOMContentLoaded', () => {
    const distList = document.getElementById('dist-list');
    if (distList) {
        distributions.forEach(dist => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <div class="distribution">
                    <img src="${dist.logo}" alt="${dist.name} Logo" class="dist-logo">
                    <h4>${dist.name}</h4>
                    <p>${dist.description}</p>
                    <a href="${dist.url}" target="_blank" class="btn">الموقع الرسمي</a>
                </div>
            `;
            distList.appendChild(listItem);
        });
    }
});
