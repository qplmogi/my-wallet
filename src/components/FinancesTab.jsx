import { useState } from 'react';
import { DollarSign, Plus, Search, Calendar, TrendingUp, TrendingDown } from 'lucide-react';

const FinancesTab = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [transactions, setTransactions] = useState([]);

    
    const [formData, setFormData] = useState({
        type: 'income', 
        title: '',
        category: '',
        amount: '',
        date: ''
    });

    const totalIncome = transactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);
    
    const totalExpense = transactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);

    const balance = totalIncome - totalExpense;

    const filteredTransactions = activeFilter === 'all' 
        ? transactions 
        : transactions.filter(t => t.type === activeFilter);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: Date.now(),
            type: activeFilter,
            title: formData.title,
            category: formData.category,
            amount: parseInt(formData.amount.replace(/,/g, '')),
            date: formData.date
        };
        setTransactions([newTransaction, ...transactions]);
        setFormData({
            type: 'income',
            title: '',
            category: '',
            amount: '',
            date: ''
        });
    };

    const formatNumber = (num) => {
        return num.toLocaleString('en-US');
    };

    const handleAmountChange = (e) => {
        const value = e.target.value.replace(/,/g, '');
        if (value === '' || /^\d+$/.test(value)) {
        setFormData({...formData, amount: value});
        }
    };

    return (
        <div className="p-8 bg-gray-50 min-h-screen" dir="rtl">

            {/* هدر */}
            <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                <div className="bg-gray-100 p-3 rounded-xl">
                    <DollarSign className="text-black-600 text-2xl" />
                </div>
                <h1 className="text-3xl font-bold">پول من</h1>
                </div>
                <button 
                onClick={() => setActiveFilter('income')}
                className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-gray-800 transition"
                >
                <Plus size={20} />
                یه چیزی اضافه کن
                </button>
            </div>


            {/* خلاصه مالی */}
            <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                    <p className="text-gray-600 mb-2">💰 درآمد کل</p>
                    <p className="text-2xl font-bold text-green-600">
                        {formatNumber(totalIncome)} ت
                    </p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                    <p className="text-gray-600 mb-2">💸 هزینه کل</p>
                    <p className="text-2xl font-bold text-red-600">
                        {formatNumber(totalExpense)} ت
                    </p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                    <p className="text-gray-600 mb-2">💵 باقی‌مانده</p>
                    <p className={`text-2xl font-bold ${balance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {formatNumber(balance)} ت
                    </p>
                </div>
            </div>


            {/* سرچ و فیلتر */}
            <div className="bg-white rounded-2xl p-4 mb-6 flex items-center gap-4">
                <div className="flex-1 flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-3">
                <Search className="text-gray-400" size={20} />
                <input
                    type="text"
                    placeholder="دنبال چی می‌گردی؟"
                    className="flex-1 bg-transparent border-0 outline-none"
                />
                </div>
                <select className="bg-gray-50 rounded-xl px-4 py-3 border-0 outline-none">
                <option>همه</option>
                <option>درآمد</option>
                <option>هزینه</option>
                </select>
            </div>


            {/* تب‌های فیلتر */}
            <div className="flex gap-3 mb-8 bg-white p-2 rounded-2xl w-fit">
                <button
                onClick={() => setActiveFilter('income')}
                className={`px-8 py-3 rounded-xl font-medium transition-all ${
                    activeFilter === 'income'
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                >
                درآمد
                </button>
                <button
                onClick={() => setActiveFilter('expense')}
                className={`px-8 py-3 rounded-xl font-medium transition-all ${
                    activeFilter === 'expense'
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                >
                هزینه 
                </button>
                <button
                onClick={() => setActiveFilter('all')}
                className={`px-8 py-3 rounded-xl font-medium transition-all ${
                    activeFilter === 'all'
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                >
                همه چی
                </button>
            </div>


            {/*  فرم افزودن - فقط برای هزینه و درامد  */}
            {(activeFilter === 'income' || activeFilter === 'expense') && (
                <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
                <h2 className="text-xl font-bold mb-6">
                    {activeFilter === 'income' ? ' پول اومد 💰' :' پول رفت 💸' }
                </h2>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">چقدر؟</label>
                    <input
                    type="text"
                    value={formData.amount ? formatNumber(parseInt(formData.amount)) : ''}
                    onChange={handleAmountChange}
                    placeholder="۰"
                    required
                    className="w-full bg-gray-100 border-0 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">
                        {activeFilter === 'income' ? 'از کجا اومد؟' :'واسه چی خرج شد؟' }
                    </label>
                    <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="توضیحات..."
                    required
                    className="w-full bg-gray-100 border-0 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2">از چه نوعیه؟</label>
                    <select 
                        value={formData.category}
                        onChange={(e) => setFormData({...formData, category: e.target.value})}
                        required
                        className="w-full bg-gray-100 border-0 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                    >
                        <option value="">یکی رو انتخاب کن</option>
                        <option>خوراکی</option>
                        <option>حمل و نقل</option>
                        <option>سرگرمی</option>
                        <option>کار با مشتری</option>
                        <option>نرم‌افزار و اپلیکیشن</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2"> تاریخ</label>
                    <input
                    type="text"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    placeholder="1403/07/14"
                    required
                    className="w-full bg-gray-100 border-0 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                    />
                </div>

                <button 
                    type="submit"
                    className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition flex items-center justify-center gap-2"
                >
                    <Plus size={20} />
                    ثبت کن
                </button>
                </form>
            )}


            {/* لیست تراکنش‌ها */}
            {activeFilter === 'all' && (
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        آخرین تراکنش‌ها 📝
                    </h2>

                    <div className="space-y-3">
                        {filteredTransactions.map((transaction) => (
                            <div 
                                key={transaction.id}
                                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
                            >
                                {/* آیکون و اطلاعات */}
                                <div className="flex items-center gap-4">
                                    <div className={`p-3 rounded-xl ${
                                        transaction.type === 'income' 
                                        ? 'bg-green-100' 
                                        : 'bg-red-100'
                                                }`}>
                                        {transaction.type === 'income' 
                                        ? <TrendingUp className="text-green-600" size={24} />
                                        : <TrendingDown className="text-red-600" size={24} />
                                        }
                                    </div>
                                    <div> 
                                        <h3 className="font-bold text-gray-900">{transaction.title}</h3>
                                        <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
                                            <span>{transaction.category}</span>
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                {transaction.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* مبلغ */}
                                <div className={`text-xl font-bold ${
                                    transaction.type === 'income' 
                                    ? 'text-green-600' 
                                    : 'text-red-600'
                                }`}>
                                    {transaction.type === 'income' ? '+' : '-'}
                                    {formatNumber(transaction.amount)} ت
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FinancesTab;