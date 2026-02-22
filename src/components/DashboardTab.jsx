// src/components/Dashboard.jsx
import Button from './ui/Button';

const Dashboard = () => {
  return (
    <div dir="rtl" style={{ 
      padding: '24px',
      backgroundColor: '#f9fafb',
      minHeight: 'calc(100vh - 64px)',
    }} >
      
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '28px',fontWeight: 'bold', color: '#111827',margin: '0 0 8px 0'}}>
          سلام! چطوری؟👋
        </h1>
        <p style={{ fontSize: '14px',color: '#6b7280',margin: 0}}>
          پول و پولات تو بهمن ۱۴۰۴
        </p>
      </div>

      <div style={{display: 'grid',gridTemplateColumns: 'repeat(3, 1fr)',gap: '16px',marginBottom: '24px'}}>
        <div style={{
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '16px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>💰</div>
          <p style={{ 
            fontSize: '12px', 
            color: '#6b7280',
            margin: '0 0 8px 0'
          }}>
            درآمد
          </p>
          <p style={{ 
            fontSize: '28px', 
            fontWeight: 'bold', 
            color: '#10b981',
            margin: 0
          }}>
            ۸,۴۳۰
          </p>
          <p style={{ 
            fontSize: '11px', 
            color: '#9ca3af',
            margin: '4px 0 0 0'
          }}>
            تومان
          </p>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '16px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>💸</div>
          <p style={{ 
            fontSize: '12px', 
            color: '#6b7280',
            margin: '0 0 8px 0'
          }}>
            هزینه
          </p>
          <p style={{ 
            fontSize: '28px', 
            fontWeight: 'bold', 
            color: '#ef4444',
            margin: 0
          }}>
            ۲,۷۹۰
          </p>
          <p style={{ 
            fontSize: '11px', 
            color: '#9ca3af',
            margin: '4px 0 0 0'
          }}>
            تومان
          </p>
        </div>

        <div style={{
          backgroundColor: 'white',
          padding: '24px',
          borderRadius: '16px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: '1px solid #e5e7eb',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '24px', marginBottom: '8px' }}>🎯</div>
          <p style={{ 
            fontSize: '12px', 
            color: '#6b7280',
            margin: '0 0 8px 0'
          }}>
            باقی مانده
          </p>
          <p style={{ 
            fontSize: '28px', 
            fontWeight: 'bold', 
            color: '#3b82f6',
            margin: 0
          }}>
            ۵,۶۴۰
          </p>
          <p style={{ 
            fontSize: '11px', 
            color: '#9ca3af',
            margin: '4px 0 0 0'
          }}>
            تومان
          </p>
        </div>
      </div>

      {/* چی شده اخیراً */}
      <div style={{
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '16px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        border: '1px solid #e5e7eb',
        marginBottom: '24px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px'
        }}>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: 'bold',
            margin: 0,
            color: '#111827'
          }}>
            رویدادهای اخیر 📝
          </h3>
        </div>
        
        <div>
          {[
            { 
              title: 'حساب شماره ••۱ پرداخت شد', 
              amount: '۲,۵۰۰', 
              type: 'income', 
              icon: '✅',
              subtitle: 'مشتری: شرکت آگمب'
            },
            { 
              title: 'حساب شماره ••۲ منتظره', 
              amount: '۱,۸۰۰', 
              type: 'pending', 
              icon: '⏰',
              subtitle: 'مشتری: تک استارت'
            },
            { 
              title: 'خرید وسایل اداری', 
              amount: '-۱۳۰', 
              type: 'expense', 
              icon: '📎',
              subtitle: 'مشتری: خرجی کار'
            }
          ].map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 0',
              borderBottom: index < 2 ? '1px solid #f3f4f6' : 'none'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: '#f3f4f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px'
                }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ 
                    margin: 0, 
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#111827'
                  }}>
                    {item.title}
                  </p>
                  <p style={{ 
                    margin: '4px 0 0 0', 
                    fontSize: '12px',
                    color: '#9ca3af'
                  }}>
                    {item.subtitle}
                  </p>
                </div>
              </div>
              <div style={{ textAlign: 'left' }}>
                <span style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: item.type === 'income' ? '#10b981' : 
                         item.type === 'pending' ? '#f59e0b' : '#ef4444'
                }}>
                  {item.amount} تومان
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* دو دکمه کار سریع */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '16px'
      }}>
        {/* پول اومد */}
        <div style={{
          backgroundColor: 'white',
          padding: '32px',
          borderRadius: '16px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: '2px solid #10b981',
          textAlign: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 8px 16px rgba(16,185,129,0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
        }}
        onClick={() => alert('فرم ثبت درآمد')}>
          <div style={{ 
            fontSize: '48px', 
            marginBottom: '12px',
            backgroundColor: '#d1fae5',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px'
          }}>
            ➕
          </div>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: 'bold',
            color: '#10b981',
            margin: '0 0 8px 0'
          }}>
            پول اومد
          </h3>
          <p style={{ 
            fontSize: '13px',
            color: '#6b7280',
            margin: 0
          }}>
            ثبت درآمد جدید
          </p>
        </div>

        {/* خرج کردم */}
        <div style={{
          backgroundColor: 'white',
          padding: '32px',
          borderRadius: '16px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          border: '2px solid #ef4444',
          textAlign: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 8px 16px rgba(239,68,68,0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
        }}
        onClick={() => alert('فرم ثبت هزینه')}>
          <div style={{ 
            fontSize: '48px', 
            marginBottom: '12px',
            backgroundColor: '#fee2e2',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px'
          }}>
            ➕
          </div>
          <h3 style={{ 
            fontSize: '18px', 
            fontWeight: 'bold',
            color: '#ef4444',
            margin: '0 0 8px 0'
          }}>
            خرج کردم
          </h3>
          <p style={{ 
            fontSize: '13px',
            color: '#6b7280',
            margin: 0
          }}>
            ثبت هزینه جدید
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
